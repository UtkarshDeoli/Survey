
export interface IUser{
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'admin' | 'boothKaryakarta' | 'surveyCollector' | 'supportExecutive' | 'surveyManager';
  autoAssignSurvey?: boolean;
  veiwOwnCollectData?: boolean;
  preventDataDownload?: boolean;
  preventDataAnalytics?: boolean;
  removeAudioRecordingAccess?: boolean;
  viewPendingData?: boolean;
  assignedSurvey?: string[];
  status:"active"|"inactive";
}