var DATA_STATE_CLEAN = "C";
var DATA_STATE_DIRTY = "D";
var DATA_STATE_POSTED = "P";


var ASCII_QUESTION = 63;
var ASCII_TILDA = 126;
var ASCII_BANG = 33;
var ASCII_PIPE = 124;
var ASCII_SHIFT_IN = 15;
var ASCII_0 = 48;
var ASCII_1 = 49;
var ASCII_2 = 50;
var ASCII_3 = 51;
var ASCII_4 = 52;
var ASCII_5 = 53;
var ASCII_6 = 54;
var ASCII_7 = 55;
var ASCII_8 = 56;
var ASCII_D = 68;

var RESULT_UNKNOWN = "unknown";


var EXIT_ACTION_EXIT_NO_CONFIRMATION = "exit,no confirmation";
var EXIT_ACTION_EXIT_CONFIRMATION = "exit,confirmation";
var EXIT_ACTION_GO_TO_NEXT_SCO = "continue";
var EXIT_ACTION_DISPLAY_MESSAGE = "message page";
var EXIT_ACTION_DO_NOTHING = "do nothing";
var EXIT_ACTION_REFRESH_PAGE = "refresh page";		//TODO - should we add this to the server-side properties, or only keep it client-side and accesible to AICC

var POSSIBLE_NAVIGATION_REQUEST_INDEX_START = 0;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_RESUME_ALL = 1;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_CONTINUE = 2;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_PREVIOUS = 3;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_EXIT = 4;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_EXIT_ALL = 5;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_SUSPEND_ALL = 6;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_ABANDON = 7;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_ABANDON_ALL = 8;
var POSSIBLE_NAVIGATION_REQUEST_INDEX_CHOICE = 9;

var LAUNCH_TYPE_FRAMESET = "frameset";
var LAUNCH_TYPE_POPUP = "new window";
var LAUNCH_TYPE_POPUP_AFTER_CLICK = "new window,after click";
var LAUNCH_TYPE_POPUP_WITHOUT_BROWSER_TOOLBAR = "new window without browser toolbar";
var LAUNCH_TYPE_POPUP_AFTER_CLICK_WITHOUT_BROWSER_TOOLBAR = "new window,after click,without browser toolbar";
var LAUNCH_TYPE_POPUP_WITH_MENU = "new window with menubar"; //for debugging only, not a user-facing option

var STANDARD_SCORM_11 = "SCORM 1.1";
var STANDARD_SCORM_12 = "SCORM 1.2";
var STANDARD_SCORM_2004_2ND_EDITION = "SCORM 2004 2nd Edition";
var STANDARD_SCORM_2004_3RD_EDITION = "SCORM 2004 3rd Edition";
var STANDARD_SCORM_2004_4TH_EDITION = "SCORM 2004 4th Edition";
var STANDARD_AICC = "AICC";
// legacy names
var SCORM_2004_2ND_EDITION = "SCORM 2004 2nd Edition";
var STANDARD_SCORM_2004 = "SCORM 2004 3rd Edition";

var SCORM_TYPE_SCO = "SCO";
var SCORM_TYPE_ASSET = "Asset";
var SCORM_TYPE_OBJECTIVE = "Objective";
var SCORM_TYPE_AGGREGATION = "Aggregation";

var STATUS_DISPLAY_SUCCESS_ONLY = "success only";
var STATUS_DISPLAY_COMPELTION_ONLY = "completion only";
var STATUS_DISPLAY_SEPERATE = "separate";
var STATUS_DISPLAY_COMBINED = "combined";
var STATUS_DISPLAY_NONE = "none";

var STATUS_ROLLUP_METHOD_STATUS_PROVIDED_BY_COURSE = "STATUS_PROVIDED_BY_COURSE";
var STATUS_ROLLUP_METHOD_COMPLETE_WHEN_ALL_UNITS_COMPLETE = "COMPLETE_WHEN_ALL_UNITS_COMPLETE";
var STATUS_ROLLUP_METHOD_COMPLETE_WHEN_ALL_UNITS_COMPLETE_AND_NOT_FAILED = "COMPLETE_WHEN_ALL_UNITS_COMPLETE_AND_NOT_FAILED";
var STATUS_ROLLUP_METHOD_COMPLETE_WHEN_THRESHOLD_SCORE_IS_MET = "COMPLETE_WHEN_THRESHOLD_SCORE_IS_MET";
var STATUS_ROLLUP_METHOD_COMPLETE_WHEN_ALL_UNITS_COMPLETE_AND_THRESHOLD_SCORE_IS_MET = "COMPLETE_WHEN_ALL_UNITS_COMPLETE_AND_THRESHOLD_SCORE_IS_MET";
var STATUS_ROLLUP_METHOD_COMPLETE_WHEN_ALL_UNITS_ARE_PASSED = "COMPLETE_WHEN_ALL_UNITS_ARE_PASSED";

var SCORE_ROLLUP_METHOD_SCORE_PROVIDED_BY_COURSE = "SCORE_PROVIDED_BY_COURSE";
var SCORE_ROLLUP_METHOD_AVERAGE_SCORE_OF_ALL_UNITS = "AVERAGE_SCORE_OF_ALL_UNITS";
var SCORE_ROLLUP_METHOD_AVERAGE_SCORE_OF_ALL_UNITS_WITH_SCORES = "AVERAGE_SCORE_OF_ALL_UNITS_WITH_SCORES";
var SCORE_ROLLUP_METHOD_FIXED_AVERAGE = "FIXED_AVERAGE";
var SCORE_ROLLUP_METHOD_AVERAGE_SCORE_OF_ALL_UNITS_WITH_NONZERO_SCORES = "AVERAGE_SCORE_OF_ALL_UNITS_WITH_NONZERO_SCORES";
var SCORE_ROLLUP_METHOD_LAST_SCO_SCORE = "LAST_SCO_SCORE";

var RESET_RT_DATA_TIMING_NEVER = "never";
var RESET_RT_DATA_TIMING_WHEN_EXIT_IS_NOT_SUSPEND = "when exit is not suspend";
var RESET_RT_DATA_TIMING_ON_EACH_NEW_SEQUENCING_ATTEMPT = "on each new sequencing attempt";

var INVALID_MENU_ITEM_ACTION_DISABLE = "Disable";
var INVALID_MENU_ITEM_ACTION_HIDE = "Hide";
var INVALID_MENU_ITEM_ACTION_SHOW_ENABLE = "Show";

var LOOKAHEAD_SEQUENCER_MODE_DISABLE = "DISABLED";
var LOOKAHEAD_SEQUENCER_MODE_ENABLE = "ENABLED";
var LOOKAHEAD_SEQUENCER_MODE_REALTIME = "REALTIME";
