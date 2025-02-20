import { configuraciones } from "../Appconfig";

let server = configuraciones.server;
let socket_date=configuraciones.socket_date;

export const environment = {
  production: false,
  // API
  api: server,

  // SERVICIOS DE GESTIÓN DE USUARIO
  logIn: 'login/standar_login/',
  RegisterUser: 'usuarios/create_user/',
  updateUser: 'usuarios/update_user/',
  getToken: 'login/response_reset_password/',
  resetPassword: 'login/reset_password/',
  changePassword: 'login/change_password/',
  userInfo: 'usuarios/user_info/',

  // BENEFICIARIOS
  getBeneficients:'usuarios/retrieve-beneficiary/',
  createBeneficient:'usuarios/create-beneficiary/',
  editBeneficient:'usuarios/update-user/',
  deleteBeneficient:'usuarios/delete-user/',

  //NewService
  datesActivities:'citas/retrieve-medical-appointment-service-list/',
  generateService:'citas/insert-appointment-service-app/',
  updateAppointment:'citas/update-appointment-service/',
  cancelService:'citas/cancel-appointment-service-app/',
  getAllEmployeeSchedule:'gestion-humana/retrieve-employee-schedule/',
  getActiveDate:'citas/retrieve-appointment-service-app-by-user/',
  getCompleteDates:'citas/retrieve-complete-appointment-service-app/',
  socket_date:socket_date,

  // LOCATIONS
  getLocations:'inventario/retrieve-warehouse-location/',
  getBarriosLocation:'citas/retrieve-allowed-neighbourhood/',

  //SERVICIOS DEL MÉDICO
  getMedicDates:'citas/retrieve-appointment-service-by-doctor/',
  
  /* DOCUMENTOS */
  createArea:'gestion-humana/insert-area/',
  getAreas:'gestion-humana/retrieve-area/',
  deleteArea:'gestion-humana/delete-area/',
  updateArea:'gestion-humana/update-area/',
  pushDocument:'gestion-humana/insert-area-document/',
  returnDocuments:'gestion-humana/retrieve-area-document/',
  returnDocumentsByArea:'gestion-humana/retrieve-area-document/',
  deleteDocument:'gestion-humana/delete-area-document/',

  /* CITA ACTIVA MEDICO */

  getActiveDate:'citas/retrieve-activate-appointment-service/',

  /* NOTIFICACIONES DOCTOR */
  getNotifications:'inventario/retrieve-stock-warning-by-doctor/',
  getNotificationsMaintenance:'inventario/retrieve-maintenance-warning-by-doctor/',

}