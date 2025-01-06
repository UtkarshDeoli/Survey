import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { checkToken } from "@/utils/common_functions";
import { validRoles } from "@/utils/constants";

interface UserData {
  id: string;
  email: string;
  role: string;
  name: string;
}

const withAuth = (WrappedComponent: any) => {
    console.log("auth component running")
  const ProtectedComponent = (props: any) => {
    const router = useRouter();
    const path = usePathname();
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
      const payload = checkToken();
      console.log("Logged in user data is --->", payload);
    
      if (!payload) {
        router.replace("/");
        return;
      }
    
      const isAdmin = payload?.role[0].category === "admin";
      const isAuthorized = payload?.role.find((el: any) =>
        validRoles.includes(el._id.toString())
      );
    
      if (isAdmin) {
        setUserData(payload);
        return;
      }
    
      if (!isAuthorized) {
        router.replace("/");
        return;
      }
    
      const { category, name } = payload.role[0];
    
      // Define allowed paths for each role
      const allowedPaths: Record<string, string[]> = {
        "Operation team": ["/admin/surveys", "/admin/data", "/admin/todos","/admin/support"],
        Supervisor: ["/admin/collectors", "/admin/collector-surveys","/admin/support"],
        "Survey Manager": ["/admin/surveys","/admin/support"],
        "Quality Check": ["/admin/quality-check-surveys","/admin/support"],
        "Data Analyst": ["/admin/data","/admin/support"],
        "Data Manager": ["/admin/data","/admin/support"],
      };
    
      const allowedForRole = allowedPaths[name] || [];
      console.log("name is ---->",name)
    
      // If the current path is not allowed, redirect
      const isAllowed = allowedForRole.some((allowedPath) => path.startsWith(allowedPath));
    
      if (!isAllowed) {
        const defaultRedirect: Record<string, string> = {
          "Operation team": "/admin/surveys",
          Supervisor: "/admin/collectors",
          "Survey Manager": "/admin/surveys",
          "Quality Check": "/admin/quality-check-surveys",
          "Data Analyst": "/admin/data",
          "Data Manager": "/admin/data",
        };
    
        router.replace(defaultRedirect[name]);
      }
    
      setUserData(payload);
    }, [router, path]);
    

    if (!userData) return null; // Optionally, show a loading spinner

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default withAuth;
