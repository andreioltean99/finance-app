export enum ActionType{
    OPEN_EXTRA_PAGE = 'open_extra_page',
    CLOSE_EXTRA_PAGE = 'close_extra_page',
    SET_CURRENT_PAGE = 'set_current_page',
    LOGIN_PENDING = 'login_pending',
    LOGIN_FULFILLED = 'login_fulfilled',
    LOGIN_REJECTED = 'login_rejected',
    GUEST_LOGIN = 'guest_login',
    LOGOUT = 'logout',
    REGISTER = 'register',
    GET_USER_PENDING = 'get_user_pending',
    GET_USER_FULFILLED = 'get_user_fulfilled',
    GET_USER_ERROR = 'get_user_error',
    RESET_AUTH_ERRORS = 'reset_auth_errors',
}