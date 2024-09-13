
export interface IUser{
  username: string;
  name: string;
  email: string;
  password: string;
  confirm_password?: string;
  role: 'admin' | 'booth_karyakarta' | 'survey_collector' | 'support_executive' | 'survey_manager';
  auto_assign_survey?: boolean;
  view_own_collected_data?: boolean;
  prevent_data_download?: boolean;
  prevent_data_analytics?: boolean;
  prevent_spatial_report?: boolean;
  remove_audio_recording_access?: boolean;
  view_pending_data?: boolean;
  assigned_survey?: string[];
  status:"active"|"inactive";
}