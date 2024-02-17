interface TbaStatus {
    current_season:   number;
    max_season:       number;
    is_datafeed_down: boolean;
    down_events:      string[];
    ios:              TbaPhone;
    android:          TbaPhone;
}

interface TbaPhone {
    min_app_version:    number;
    latest_app_version: number;
}
/****************************************/
interface TbaTeam {
    key:               string;
    team_number:       number;
    nickname:          string;
    name:              string;
    school_name:       string;
    city:              string;
    state_prov:        string;
    country:           string;
    address:           string;
    postal_code:       string;
    gmaps_place_id:    string;
    gmaps_url:         string;
    lat:               number;
    lng:               number;
    location_name:     string;
    website:           string;
    rookie_year:       number;
    motto:             string;
    home_championship: {};
}
/****************************************/
interface TbaTeamSimple {
    key:         string;
    team_number: number;
    nickname:    string;
    name:        string;
    city:        string;
    state_prov:  string;
    country:     string;
}
/****************************************/
interface TbaTeamEventStatuses {
    additionalProp1: TbaAdditionalProp;
    additionalProp2: TbaAdditionalProp;
    additionalProp3: TbaAdditionalProp;
}

interface TbaAdditionalProp {
    qual:                TbaQualification;
    alliance:            TbaAlliance;
    playoff:             TbaPlayoff;
    alliance_status_str: string;
    playoff_status_str:  string;
    overall_status_str:  string;
    next_match_key:      string;
    last_match_key:      string;
}

interface TbaAlliance {
    name:   string;
    number: number;
    backup: TbaBackup;
    pick:   number;
}

interface TbaBackup {
    out: string;
    in:  string;
}

interface TbaPlayoff {
    level:                string;
    current_level_record: TbaRecord;
    record:               TbaRecord;
    status:               string;
    playoff_average:      number;
}

interface TbaRecord {
    losses: number;
    wins:   number;
    ties:   number;
}

interface TbaQualification {
    num_teams:       number;
    ranking:         TbaStatusRanking;
    sort_order_info: TbaSortOrderInfo[];
    status:          string;
}

interface TbaStatusRanking {
    matches_played: number;
    qual_average:   number;
    extra_stats?:   number[];
    sort_orders:    number[];
    record:         TbaRecord;
    rank:           number;
    dq:             number;
    team_key:       string;
}

interface TbaSortOrderInfo {
    precision: number;
    name:      string;
}
/****************************************/
interface TbaEvent {
    key:                 string;
    name:                string;
    event_code:          string;
    event_type:          number;
    district:            TbaDistrict;
    city:                string;
    state_prov:          string;
    country:             string;
    start_date:          Date;
    end_date:            Date;
    year:                number;
    short_name:          string;
    event_type_string:   string;
    week:                number;
    address:             string;
    postal_code:         string;
    gmaps_place_id:      string;
    gmaps_url:           string;
    lat:                 number;
    lng:                 number;
    location_name:       string;
    timezone:            string;
    website:             string;
    first_event_id:      string;
    first_event_code:    string;
    webcasts:            TbaWebcast[];
    division_keys:       string[];
    parent_event_key:    string;
    playoff_type:        number;
    playoff_type_string: string;
}

interface TbaDistrict {
    abbreviation: string;
    display_name: string;
    key:          string;
    year:         number;
}

interface TbaWebcast {
    type:    string;
    channel: string;
    date:    string;
    file:    string;
}
/****************************************/
interface TbaEventSimple {
    key:        string;
    name:       string;
    event_code: string;
    event_type: number;
    district:   TbaDistrict;
    city:       string;
    state_prov: string;
    country:    string;
    start_date: Date;
    end_date:   Date;
    year:       number;
}
/****************************************/
interface TbaRanking {
    team_key:     string;
    rank:         number;
    rookie_bonus: number;
    point_total:  number;
    event_points: TbaEventPoint[];
}

interface TbaEventPoint {
    district_cmp:    boolean;
    total:           number;
    alliance_points: number;
    elim_points:     number;
    award_points:    number;
    event_key:       string;
    qual_points:     number;
}
/****************************************/
interface TbaRobot {
    year:       number;
    robot_name: string;
    key:        string;
    team_key:   string;
}
/****************************************/
interface TbaMatch {
    key:               string;
    comp_level:        string;
    set_number:        number;
    match_number:      number;
    alliances:         TbaMatchAlliances;
    winning_alliance:  string;
    event_key:         string;
    time:              number;
    actual_time:       number;
    predicted_time?:   number;
    post_result_time?: number;
    score_breakdown?:  {};
    videos?:           TbaVideo[];
}

interface TbaMatchAlliances {
    red:  TbaBlueRedAlliance;
    blue: TbaBlueRedAlliance;
}

interface TbaBlueRedAlliance {
    score:               number;
    team_keys:           string[];
    surrogate_team_keys: string[];
    dq_team_keys:        string[];
}

interface TbaVideo {
    type: string;
    key:  string;
}
/****************************************/
interface TbaAward {
    name:           string;
    award_type:     number;
    event_key:      string;
    recipient_list: TbaAwardRecipientList[];
    year:           number;
}

interface TbaAwardRecipientList {
    team_key: string;
    awardee:  string;
}
/****************************************/
interface TbaMedia {
    type:        string;
    foreign_key: string;
    details:     {};
    preferred:   boolean;
    direct_url:  string;
    view_url:    string;
}
/****************************************/
interface TbaAlliance {
    name:     string;
    backup:   TbaBackup;
    declines: string[];
    picks:    string[];
    status:   TbaAllianceStatus;
}

interface TbaAllianceStatus {
    playoff_average:      number;
    level:                string;
    record:               TbaRecord;
    current_level_record: TbaRecord;
    status:               string;
}
/****************************************/
interface TbaOprs {
    oprs:  OprsAditionalProps;
    dprs:  OprsAditionalProps;
    ccwms: OprsAditionalProps;
}

interface OprsAditionalProps {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
}
/****************************************/
interface TbaEventRanking {
    rankings:         TbaStatusRanking[];
    extra_stats_info: TbaSortOrderInfo[];
    sort_order_info:  TbaSortOrderInfo[];
}
/****************************************/
interface TbaZebraMotionworks {
    key:       string;
    times:     Array<number[]>;
    alliances: TbaZebraMotionworksAlliances;
}

interface TbaZebraMotionworksAlliances {
    red:  TbaMotionwork[];
    blue: TbaMotionwork[];
}

interface TbaMotionwork {
    team_key: string;
    xs:       Array<Array<number | null>>;
    ys:       Array<Array<number | null>>;
}
/****************************************/