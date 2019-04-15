type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  bigint: any;
};

/** columns and relationships of "auto_tags" */
export type Auto_Tags = {
  channel_id: Scalars["String"];
  id: Scalars["Int"];
  /** An object relationship */
  image_channel: Image_Channels;
  name: Scalars["String"];
};

/** aggregated selection of "auto_tags" */
export type Auto_Tags_Aggregate = {
  aggregate?: Maybe<Auto_Tags_Aggregate_Fields>;
  nodes: Array<Auto_Tags>;
};

/** aggregate fields of "auto_tags" */
export type Auto_Tags_Aggregate_Fields = {
  avg?: Maybe<Auto_Tags_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Auto_Tags_Max_Fields>;
  min?: Maybe<Auto_Tags_Min_Fields>;
  stddev?: Maybe<Auto_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Auto_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auto_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Auto_Tags_Sum_Fields>;
  var_pop?: Maybe<Auto_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Auto_Tags_Var_Samp_Fields>;
  variance?: Maybe<Auto_Tags_Variance_Fields>;
};

/** aggregate fields of "auto_tags" */
export type Auto_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auto_Tags_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "auto_tags" */
export type Auto_Tags_Aggregate_Order_By = {
  avg?: Maybe<Auto_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Auto_Tags_Max_Order_By>;
  min?: Maybe<Auto_Tags_Min_Order_By>;
  stddev?: Maybe<Auto_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Auto_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Auto_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Auto_Tags_Sum_Order_By>;
  var_pop?: Maybe<Auto_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Auto_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Auto_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auto_tags" */
export type Auto_Tags_Arr_Rel_Insert_Input = {
  data: Array<Auto_Tags_Insert_Input>;
  on_conflict?: Maybe<Auto_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Auto_Tags_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "auto_tags" */
export type Auto_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auto_tags". All fields are combined with a logical 'AND'. */
export type Auto_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auto_Tags_Bool_Exp>>>;
  _not?: Maybe<Auto_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auto_Tags_Bool_Exp>>>;
  channel_id?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  image_channel?: Maybe<Image_Channels_Bool_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "auto_tags" */
export enum Auto_Tags_Constraint {
  /** unique or primary key constraint */
  Auto_Tags_Pkey = "auto_tags_pkey"
}

/** input type for incrementing integer columne in table "auto_tags" */
export type Auto_Tags_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "auto_tags" */
export type Auto_Tags_Insert_Input = {
  channel_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  image_channel?: Maybe<Image_Channels_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Auto_Tags_Max_Fields = {
  channel_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "auto_tags" */
export type Auto_Tags_Max_Order_By = {
  channel_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auto_Tags_Min_Fields = {
  channel_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "auto_tags" */
export type Auto_Tags_Min_Order_By = {
  channel_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "auto_tags" */
export type Auto_Tags_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Auto_Tags>;
};

/** input type for inserting object relation for remote table "auto_tags" */
export type Auto_Tags_Obj_Rel_Insert_Input = {
  data: Auto_Tags_Insert_Input;
  on_conflict?: Maybe<Auto_Tags_On_Conflict>;
};

/** on conflict condition type for table "auto_tags" */
export type Auto_Tags_On_Conflict = {
  constraint: Auto_Tags_Constraint;
  update_columns: Array<Auto_Tags_Update_Column>;
};

/** ordering options when selecting data from "auto_tags" */
export type Auto_Tags_Order_By = {
  channel_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_channel?: Maybe<Image_Channels_Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "auto_tags" */
export enum Auto_Tags_Select_Column {
  /** column name */
  Channel_Id = "channel_id",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name"
}

/** input type for updating data in table "auto_tags" */
export type Auto_Tags_Set_Input = {
  channel_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Auto_Tags_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "auto_tags" */
export type Auto_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Auto_Tags_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "auto_tags" */
export type Auto_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Auto_Tags_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "auto_tags" */
export type Auto_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Auto_Tags_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "auto_tags" */
export type Auto_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "auto_tags" */
export enum Auto_Tags_Update_Column {
  /** column name */
  Channel_Id = "channel_id",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name"
}

/** aggregate var_pop on columns */
export type Auto_Tags_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "auto_tags" */
export type Auto_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Auto_Tags_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "auto_tags" */
export type Auto_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Auto_Tags_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "auto_tags" */
export type Auto_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars["bigint"]>;
  _gt?: Maybe<Scalars["bigint"]>;
  _gte?: Maybe<Scalars["bigint"]>;
  _in?: Maybe<Array<Maybe<Scalars["bigint"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["bigint"]>;
  _lte?: Maybe<Scalars["bigint"]>;
  _neq?: Maybe<Scalars["bigint"]>;
  _nin?: Maybe<Array<Maybe<Scalars["bigint"]>>>;
};

/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = "ignore",
  /** update the row with the given values */
  Update = "update"
}

/** columns and relationships of "guilds" */
export type Guilds = {
  enabled?: Maybe<Scalars["Boolean"]>;
  guild_id: Scalars["String"];
  /** An array relationship */
  image_channels: Array<Image_Channels>;
  /** An aggregated array relationship */
  image_channels_aggregate: Image_Channels_Aggregate;
  /** An array relationship */
  images: Array<Images>;
  /** An aggregated array relationship */
  images_aggregate: Images_Aggregate;
  name: Scalars["String"];
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "guilds" */
export type GuildsImage_ChannelsArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** columns and relationships of "guilds" */
export type GuildsImage_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** columns and relationships of "guilds" */
export type GuildsImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** columns and relationships of "guilds" */
export type GuildsImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** aggregated selection of "guilds" */
export type Guilds_Aggregate = {
  aggregate?: Maybe<Guilds_Aggregate_Fields>;
  nodes: Array<Guilds>;
};

/** aggregate fields of "guilds" */
export type Guilds_Aggregate_Fields = {
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Guilds_Max_Fields>;
  min?: Maybe<Guilds_Min_Fields>;
};

/** aggregate fields of "guilds" */
export type Guilds_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Guilds_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "guilds" */
export type Guilds_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Guilds_Max_Order_By>;
  min?: Maybe<Guilds_Min_Order_By>;
};

/** input type for inserting array relation for remote table "guilds" */
export type Guilds_Arr_Rel_Insert_Input = {
  data: Array<Guilds_Insert_Input>;
  on_conflict?: Maybe<Guilds_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guilds". All fields are combined with a logical 'AND'. */
export type Guilds_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Guilds_Bool_Exp>>>;
  _not?: Maybe<Guilds_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Guilds_Bool_Exp>>>;
  enabled?: Maybe<Boolean_Comparison_Exp>;
  guild_id?: Maybe<Text_Comparison_Exp>;
  image_channels?: Maybe<Image_Channels_Bool_Exp>;
  images?: Maybe<Images_Bool_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  welcome_channel?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "guilds" */
export enum Guilds_Constraint {
  /** unique or primary key constraint */
  Guilds_Pkey = "guilds_pkey"
}

/** input type for inserting data into table "guilds" */
export type Guilds_Insert_Input = {
  enabled?: Maybe<Scalars["Boolean"]>;
  guild_id?: Maybe<Scalars["String"]>;
  image_channels?: Maybe<Image_Channels_Arr_Rel_Insert_Input>;
  images?: Maybe<Images_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Guilds_Max_Fields = {
  guild_id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "guilds" */
export type Guilds_Max_Order_By = {
  guild_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  welcome_channel?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guilds_Min_Fields = {
  guild_id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "guilds" */
export type Guilds_Min_Order_By = {
  guild_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  welcome_channel?: Maybe<Order_By>;
};

/** response of any mutation on the table "guilds" */
export type Guilds_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Guilds>;
};

/** input type for inserting object relation for remote table "guilds" */
export type Guilds_Obj_Rel_Insert_Input = {
  data: Guilds_Insert_Input;
  on_conflict?: Maybe<Guilds_On_Conflict>;
};

/** on conflict condition type for table "guilds" */
export type Guilds_On_Conflict = {
  constraint: Guilds_Constraint;
  update_columns: Array<Guilds_Update_Column>;
};

/** ordering options when selecting data from "guilds" */
export type Guilds_Order_By = {
  enabled?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  image_channels_aggregate?: Maybe<Image_Channels_Aggregate_Order_By>;
  images_aggregate?: Maybe<Images_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  welcome_channel?: Maybe<Order_By>;
};

/** select columns of table "guilds" */
export enum Guilds_Select_Column {
  /** column name */
  Enabled = "enabled",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Name = "name",
  /** column name */
  Welcome_Channel = "welcome_channel"
}

/** input type for updating data in table "guilds" */
export type Guilds_Set_Input = {
  enabled?: Maybe<Scalars["Boolean"]>;
  guild_id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  welcome_channel?: Maybe<Scalars["String"]>;
};

/** update columns of table "guilds" */
export enum Guilds_Update_Column {
  /** column name */
  Enabled = "enabled",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Name = "name",
  /** column name */
  Welcome_Channel = "welcome_channel"
}

/** columns and relationships of "image_channels" */
export type Image_Channels = {
  assigner_id: Scalars["String"];
  /** An array relationship */
  auto_tags: Array<Auto_Tags>;
  /** An aggregated array relationship */
  auto_tags_aggregate: Auto_Tags_Aggregate;
  channel_id: Scalars["String"];
  /** An object relationship */
  guild: Guilds;
  guild_id: Scalars["String"];
  /** An object relationship */
  user: Users;
};

/** columns and relationships of "image_channels" */
export type Image_ChannelsAuto_TagsArgs = {
  distinct_on?: Maybe<Array<Auto_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Auto_Tags_Order_By>>;
  where?: Maybe<Auto_Tags_Bool_Exp>;
};

/** columns and relationships of "image_channels" */
export type Image_ChannelsAuto_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Auto_Tags_Order_By>>;
  where?: Maybe<Auto_Tags_Bool_Exp>;
};

/** aggregated selection of "image_channels" */
export type Image_Channels_Aggregate = {
  aggregate?: Maybe<Image_Channels_Aggregate_Fields>;
  nodes: Array<Image_Channels>;
};

/** aggregate fields of "image_channels" */
export type Image_Channels_Aggregate_Fields = {
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Image_Channels_Max_Fields>;
  min?: Maybe<Image_Channels_Min_Fields>;
};

/** aggregate fields of "image_channels" */
export type Image_Channels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Image_Channels_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "image_channels" */
export type Image_Channels_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Image_Channels_Max_Order_By>;
  min?: Maybe<Image_Channels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "image_channels" */
export type Image_Channels_Arr_Rel_Insert_Input = {
  data: Array<Image_Channels_Insert_Input>;
  on_conflict?: Maybe<Image_Channels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "image_channels". All fields are combined with a logical 'AND'. */
export type Image_Channels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Image_Channels_Bool_Exp>>>;
  _not?: Maybe<Image_Channels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Image_Channels_Bool_Exp>>>;
  assigner_id?: Maybe<Text_Comparison_Exp>;
  auto_tags?: Maybe<Auto_Tags_Bool_Exp>;
  channel_id?: Maybe<Text_Comparison_Exp>;
  guild?: Maybe<Guilds_Bool_Exp>;
  guild_id?: Maybe<Text_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "image_channels" */
export enum Image_Channels_Constraint {
  /** unique or primary key constraint */
  Image_Channels_Pkey = "image_channels_pkey"
}

/** input type for inserting data into table "image_channels" */
export type Image_Channels_Insert_Input = {
  assigner_id?: Maybe<Scalars["String"]>;
  auto_tags?: Maybe<Auto_Tags_Arr_Rel_Insert_Input>;
  channel_id?: Maybe<Scalars["String"]>;
  guild?: Maybe<Guilds_Obj_Rel_Insert_Input>;
  guild_id?: Maybe<Scalars["String"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Image_Channels_Max_Fields = {
  assigner_id?: Maybe<Scalars["String"]>;
  channel_id?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "image_channels" */
export type Image_Channels_Max_Order_By = {
  assigner_id?: Maybe<Order_By>;
  channel_id?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Image_Channels_Min_Fields = {
  assigner_id?: Maybe<Scalars["String"]>;
  channel_id?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "image_channels" */
export type Image_Channels_Min_Order_By = {
  assigner_id?: Maybe<Order_By>;
  channel_id?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "image_channels" */
export type Image_Channels_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Image_Channels>;
};

/** input type for inserting object relation for remote table "image_channels" */
export type Image_Channels_Obj_Rel_Insert_Input = {
  data: Image_Channels_Insert_Input;
  on_conflict?: Maybe<Image_Channels_On_Conflict>;
};

/** on conflict condition type for table "image_channels" */
export type Image_Channels_On_Conflict = {
  constraint: Image_Channels_Constraint;
  update_columns: Array<Image_Channels_Update_Column>;
};

/** ordering options when selecting data from "image_channels" */
export type Image_Channels_Order_By = {
  assigner_id?: Maybe<Order_By>;
  auto_tags_aggregate?: Maybe<Auto_Tags_Aggregate_Order_By>;
  channel_id?: Maybe<Order_By>;
  guild?: Maybe<Guilds_Order_By>;
  guild_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** select columns of table "image_channels" */
export enum Image_Channels_Select_Column {
  /** column name */
  Assigner_Id = "assigner_id",
  /** column name */
  Channel_Id = "channel_id",
  /** column name */
  Guild_Id = "guild_id"
}

/** input type for updating data in table "image_channels" */
export type Image_Channels_Set_Input = {
  assigner_id?: Maybe<Scalars["String"]>;
  channel_id?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
};

/** update columns of table "image_channels" */
export enum Image_Channels_Update_Column {
  /** column name */
  Assigner_Id = "assigner_id",
  /** column name */
  Channel_Id = "channel_id",
  /** column name */
  Guild_Id = "guild_id"
}

/** columns and relationships of "image_tags" */
export type Image_Tags = {
  id: Scalars["Int"];
  /** An object relationship */
  image: Images;
  image_id: Scalars["Int"];
  name: Scalars["String"];
  tagger_id: Scalars["String"];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "image_tags" */
export type Image_Tags_Aggregate = {
  aggregate?: Maybe<Image_Tags_Aggregate_Fields>;
  nodes: Array<Image_Tags>;
};

/** aggregate fields of "image_tags" */
export type Image_Tags_Aggregate_Fields = {
  avg?: Maybe<Image_Tags_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Image_Tags_Max_Fields>;
  min?: Maybe<Image_Tags_Min_Fields>;
  stddev?: Maybe<Image_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Image_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Image_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Image_Tags_Sum_Fields>;
  var_pop?: Maybe<Image_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Image_Tags_Var_Samp_Fields>;
  variance?: Maybe<Image_Tags_Variance_Fields>;
};

/** aggregate fields of "image_tags" */
export type Image_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Image_Tags_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "image_tags" */
export type Image_Tags_Aggregate_Order_By = {
  avg?: Maybe<Image_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Image_Tags_Max_Order_By>;
  min?: Maybe<Image_Tags_Min_Order_By>;
  stddev?: Maybe<Image_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Image_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Image_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Image_Tags_Sum_Order_By>;
  var_pop?: Maybe<Image_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Image_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Image_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "image_tags" */
export type Image_Tags_Arr_Rel_Insert_Input = {
  data: Array<Image_Tags_Insert_Input>;
  on_conflict?: Maybe<Image_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Image_Tags_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "image_tags" */
export type Image_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "image_tags". All fields are combined with a logical 'AND'. */
export type Image_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Image_Tags_Bool_Exp>>>;
  _not?: Maybe<Image_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Image_Tags_Bool_Exp>>>;
  id?: Maybe<Integer_Comparison_Exp>;
  image?: Maybe<Images_Bool_Exp>;
  image_id?: Maybe<Integer_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  tagger_id?: Maybe<Text_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "image_tags" */
export enum Image_Tags_Constraint {
  /** unique or primary key constraint */
  Image_Tags_Pkey = "image_tags_pkey"
}

/** input type for incrementing integer columne in table "image_tags" */
export type Image_Tags_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "image_tags" */
export type Image_Tags_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  image?: Maybe<Images_Obj_Rel_Insert_Input>;
  image_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  tagger_id?: Maybe<Scalars["String"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Image_Tags_Max_Fields = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  tagger_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "image_tags" */
export type Image_Tags_Max_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  tagger_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Image_Tags_Min_Fields = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  tagger_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "image_tags" */
export type Image_Tags_Min_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  tagger_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "image_tags" */
export type Image_Tags_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Image_Tags>;
};

/** input type for inserting object relation for remote table "image_tags" */
export type Image_Tags_Obj_Rel_Insert_Input = {
  data: Image_Tags_Insert_Input;
  on_conflict?: Maybe<Image_Tags_On_Conflict>;
};

/** on conflict condition type for table "image_tags" */
export type Image_Tags_On_Conflict = {
  constraint: Image_Tags_Constraint;
  update_columns: Array<Image_Tags_Update_Column>;
};

/** ordering options when selecting data from "image_tags" */
export type Image_Tags_Order_By = {
  id?: Maybe<Order_By>;
  image?: Maybe<Images_Order_By>;
  image_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  tagger_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** select columns of table "image_tags" */
export enum Image_Tags_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Image_Id = "image_id",
  /** column name */
  Name = "name",
  /** column name */
  Tagger_Id = "tagger_id"
}

/** input type for updating data in table "image_tags" */
export type Image_Tags_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  tagger_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Image_Tags_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "image_tags" */
export type Image_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Image_Tags_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "image_tags" */
export type Image_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Image_Tags_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "image_tags" */
export type Image_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Image_Tags_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
  image_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "image_tags" */
export type Image_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** update columns of table "image_tags" */
export enum Image_Tags_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Image_Id = "image_id",
  /** column name */
  Name = "name",
  /** column name */
  Tagger_Id = "tagger_id"
}

/** aggregate var_pop on columns */
export type Image_Tags_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "image_tags" */
export type Image_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Image_Tags_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "image_tags" */
export type Image_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Image_Tags_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
  image_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "image_tags" */
export type Image_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** columns and relationships of "images" */
export type Images = {
  created_at: Scalars["timestamptz"];
  file_name?: Maybe<Scalars["String"]>;
  /** An object relationship */
  guild?: Maybe<Guilds>;
  guild_id?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** An array relationship */
  image_tags: Array<Image_Tags>;
  /** An aggregated array relationship */
  image_tags_aggregate: Image_Tags_Aggregate;
  message_id?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "images" */
export type ImagesImage_TagsArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** columns and relationships of "images" */
export type ImagesImage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** aggregated selection of "images" */
export type Images_Aggregate = {
  aggregate?: Maybe<Images_Aggregate_Fields>;
  nodes: Array<Images>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_Fields = {
  avg?: Maybe<Images_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Images_Max_Fields>;
  min?: Maybe<Images_Min_Fields>;
  stddev?: Maybe<Images_Stddev_Fields>;
  stddev_pop?: Maybe<Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Images_Stddev_Samp_Fields>;
  sum?: Maybe<Images_Sum_Fields>;
  var_pop?: Maybe<Images_Var_Pop_Fields>;
  var_samp?: Maybe<Images_Var_Samp_Fields>;
  variance?: Maybe<Images_Variance_Fields>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Images_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "images" */
export type Images_Aggregate_Order_By = {
  avg?: Maybe<Images_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Images_Max_Order_By>;
  min?: Maybe<Images_Min_Order_By>;
  stddev?: Maybe<Images_Stddev_Order_By>;
  stddev_pop?: Maybe<Images_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Images_Stddev_Samp_Order_By>;
  sum?: Maybe<Images_Sum_Order_By>;
  var_pop?: Maybe<Images_Var_Pop_Order_By>;
  var_samp?: Maybe<Images_Var_Samp_Order_By>;
  variance?: Maybe<Images_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "images" */
export type Images_Arr_Rel_Insert_Input = {
  data: Array<Images_Insert_Input>;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** aggregate avg on columns */
export type Images_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "images" */
export type Images_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Images_Bool_Exp>>>;
  _not?: Maybe<Images_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Images_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  file_name?: Maybe<Text_Comparison_Exp>;
  guild?: Maybe<Guilds_Bool_Exp>;
  guild_id?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  image_tags?: Maybe<Image_Tags_Bool_Exp>;
  message_id?: Maybe<Text_Comparison_Exp>;
  url?: Maybe<Text_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "images" */
export enum Images_Constraint {
  /** unique or primary key constraint */
  Images_Pkey = "images_pkey"
}

/** input type for incrementing integer columne in table "images" */
export type Images_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "images" */
export type Images_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  file_name?: Maybe<Scalars["String"]>;
  guild?: Maybe<Guilds_Obj_Rel_Insert_Input>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  image_tags?: Maybe<Image_Tags_Arr_Rel_Insert_Input>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Images_Max_Fields = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  file_name?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "images" */
export type Images_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  file_name?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Images_Min_Fields = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  file_name?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "images" */
export type Images_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  file_name?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "images" */
export type Images_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type Images_Obj_Rel_Insert_Input = {
  data: Images_Insert_Input;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** on conflict condition type for table "images" */
export type Images_On_Conflict = {
  constraint: Images_Constraint;
  update_columns: Array<Images_Update_Column>;
};

/** ordering options when selecting data from "images" */
export type Images_Order_By = {
  created_at?: Maybe<Order_By>;
  file_name?: Maybe<Order_By>;
  guild?: Maybe<Guilds_Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_tags_aggregate?: Maybe<Image_Tags_Aggregate_Order_By>;
  message_id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  Created_At = "created_at",
  /** column name */
  File_Name = "file_name",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  Message_Id = "message_id",
  /** column name */
  Url = "url",
  /** column name */
  User_Id = "user_id"
}

/** input type for updating data in table "images" */
export type Images_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  file_name?: Maybe<Scalars["String"]>;
  guild_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  message_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Images_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "images" */
export type Images_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Images_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "images" */
export type Images_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Images_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "images" */
export type Images_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Images_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "images" */
export type Images_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "images" */
export enum Images_Update_Column {
  /** column name */
  Created_At = "created_at",
  /** column name */
  File_Name = "file_name",
  /** column name */
  Guild_Id = "guild_id",
  /** column name */
  Id = "id",
  /** column name */
  Message_Id = "message_id",
  /** column name */
  Url = "url",
  /** column name */
  User_Id = "user_id"
}

/** aggregate var_pop on columns */
export type Images_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "images" */
export type Images_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Images_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "images" */
export type Images_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Images_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "images" */
export type Images_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "auto_tags" */
  delete_auto_tags?: Maybe<Auto_Tags_Mutation_Response>;
  /** delete data from the table: "guilds" */
  delete_guilds?: Maybe<Guilds_Mutation_Response>;
  /** delete data from the table: "image_channels" */
  delete_image_channels?: Maybe<Image_Channels_Mutation_Response>;
  /** delete data from the table: "image_tags" */
  delete_image_tags?: Maybe<Image_Tags_Mutation_Response>;
  /** delete data from the table: "images" */
  delete_images?: Maybe<Images_Mutation_Response>;
  /** delete data from the table: "tag_counts" */
  delete_tag_counts?: Maybe<Tag_Counts_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "auto_tags" */
  insert_auto_tags?: Maybe<Auto_Tags_Mutation_Response>;
  /** insert data into the table: "guilds" */
  insert_guilds?: Maybe<Guilds_Mutation_Response>;
  /** insert data into the table: "image_channels" */
  insert_image_channels?: Maybe<Image_Channels_Mutation_Response>;
  /** insert data into the table: "image_tags" */
  insert_image_tags?: Maybe<Image_Tags_Mutation_Response>;
  /** insert data into the table: "images" */
  insert_images?: Maybe<Images_Mutation_Response>;
  /** insert data into the table: "tag_counts" */
  insert_tag_counts?: Maybe<Tag_Counts_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "auto_tags" */
  update_auto_tags?: Maybe<Auto_Tags_Mutation_Response>;
  /** update data of the table: "guilds" */
  update_guilds?: Maybe<Guilds_Mutation_Response>;
  /** update data of the table: "image_channels" */
  update_image_channels?: Maybe<Image_Channels_Mutation_Response>;
  /** update data of the table: "image_tags" */
  update_image_tags?: Maybe<Image_Tags_Mutation_Response>;
  /** update data of the table: "images" */
  update_images?: Maybe<Images_Mutation_Response>;
  /** update data of the table: "tag_counts" */
  update_tag_counts?: Maybe<Tag_Counts_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_Auto_TagsArgs = {
  where: Auto_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_GuildsArgs = {
  where: Guilds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Image_ChannelsArgs = {
  where: Image_Channels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Image_TagsArgs = {
  where: Image_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ImagesArgs = {
  where: Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tag_CountsArgs = {
  where: Tag_Counts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_Auto_TagsArgs = {
  objects: Array<Auto_Tags_Insert_Input>;
  on_conflict?: Maybe<Auto_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GuildsArgs = {
  objects: Array<Guilds_Insert_Input>;
  on_conflict?: Maybe<Guilds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Image_ChannelsArgs = {
  objects: Array<Image_Channels_Insert_Input>;
  on_conflict?: Maybe<Image_Channels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Image_TagsArgs = {
  objects: Array<Image_Tags_Insert_Input>;
  on_conflict?: Maybe<Image_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ImagesArgs = {
  objects: Array<Images_Insert_Input>;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_CountsArgs = {
  objects: Array<Tag_Counts_Insert_Input>;
  on_conflict?: Maybe<Tag_Counts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Auto_TagsArgs = {
  _inc?: Maybe<Auto_Tags_Inc_Input>;
  _set?: Maybe<Auto_Tags_Set_Input>;
  where: Auto_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_GuildsArgs = {
  _set?: Maybe<Guilds_Set_Input>;
  where: Guilds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Image_ChannelsArgs = {
  _set?: Maybe<Image_Channels_Set_Input>;
  where: Image_Channels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Image_TagsArgs = {
  _inc?: Maybe<Image_Tags_Inc_Input>;
  _set?: Maybe<Image_Tags_Set_Input>;
  where: Image_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ImagesArgs = {
  _inc?: Maybe<Images_Inc_Input>;
  _set?: Maybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_CountsArgs = {
  _inc?: Maybe<Tag_Counts_Inc_Input>;
  _set?: Maybe<Tag_Counts_Set_Input>;
  where: Tag_Counts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  Asc_Nulls_First = "asc_nulls_first",
  /** in the ascending order, nulls last */
  Asc_Nulls_Last = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  Desc_Nulls_First = "desc_nulls_first",
  /** in the descending order, nulls last */
  Desc_Nulls_Last = "desc_nulls_last"
}

/** query root */
export type Query_Root = {
  /** fetch data from the table: "auto_tags" */
  auto_tags: Array<Auto_Tags>;
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: Auto_Tags_Aggregate;
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk?: Maybe<Auto_Tags>;
  /** fetch data from the table: "guilds" */
  guilds: Array<Guilds>;
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: Guilds_Aggregate;
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk?: Maybe<Guilds>;
  /** fetch data from the table: "image_channels" */
  image_channels: Array<Image_Channels>;
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: Image_Channels_Aggregate;
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk?: Maybe<Image_Channels>;
  /** fetch data from the table: "image_tags" */
  image_tags: Array<Image_Tags>;
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: Image_Tags_Aggregate;
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk?: Maybe<Image_Tags>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: Array<Tag_Counts>;
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: Tag_Counts_Aggregate;
  /** fetch data from the table: "tag_counts" */
  tag_counts: Array<Tag_Counts>;
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: Tag_Counts_Aggregate;
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk?: Maybe<Tag_Counts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootAuto_TagsArgs = {
  distinct_on?: Maybe<Array<Auto_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Auto_Tags_Order_By>>;
  where?: Maybe<Auto_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootAuto_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Auto_Tags_Order_By>>;
  where?: Maybe<Auto_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootAuto_Tags_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootGuildsArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** query root */
export type Query_RootGuilds_AggregateArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** query root */
export type Query_RootGuilds_By_PkArgs = {
  guild_id: Scalars["String"];
};

/** query root */
export type Query_RootImage_ChannelsArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Channels_By_PkArgs = {
  channel_id: Scalars["String"];
};

/** query root */
export type Query_RootImage_TagsArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootImage_Tags_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** query root */
export type Query_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** query root */
export type Query_RootImages_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootTag_CountArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Count_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** query root */
export type Query_RootTag_CountsArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Counts_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Counts_By_PkArgs = {
  name: Scalars["String"];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars["String"];
};

/** subscription root */
export type Subscription_Root = {
  /** fetch data from the table: "auto_tags" */
  auto_tags: Array<Auto_Tags>;
  /** fetch aggregated fields from the table: "auto_tags" */
  auto_tags_aggregate: Auto_Tags_Aggregate;
  /** fetch data from the table: "auto_tags" using primary key columns */
  auto_tags_by_pk?: Maybe<Auto_Tags>;
  /** fetch data from the table: "guilds" */
  guilds: Array<Guilds>;
  /** fetch aggregated fields from the table: "guilds" */
  guilds_aggregate: Guilds_Aggregate;
  /** fetch data from the table: "guilds" using primary key columns */
  guilds_by_pk?: Maybe<Guilds>;
  /** fetch data from the table: "image_channels" */
  image_channels: Array<Image_Channels>;
  /** fetch aggregated fields from the table: "image_channels" */
  image_channels_aggregate: Image_Channels_Aggregate;
  /** fetch data from the table: "image_channels" using primary key columns */
  image_channels_by_pk?: Maybe<Image_Channels>;
  /** fetch data from the table: "image_tags" */
  image_tags: Array<Image_Tags>;
  /** fetch aggregated fields from the table: "image_tags" */
  image_tags_aggregate: Image_Tags_Aggregate;
  /** fetch data from the table: "image_tags" using primary key columns */
  image_tags_by_pk?: Maybe<Image_Tags>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** execute function "tag_count" which returns "tag_counts" */
  tag_count: Array<Tag_Counts>;
  /** execute function "tag_count" and query aggregates on result of table type "tag_counts" */
  tag_count_aggregate: Tag_Counts_Aggregate;
  /** fetch data from the table: "tag_counts" */
  tag_counts: Array<Tag_Counts>;
  /** fetch aggregated fields from the table: "tag_counts" */
  tag_counts_aggregate: Tag_Counts_Aggregate;
  /** fetch data from the table: "tag_counts" using primary key columns */
  tag_counts_by_pk?: Maybe<Tag_Counts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootAuto_TagsArgs = {
  distinct_on?: Maybe<Array<Auto_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Auto_Tags_Order_By>>;
  where?: Maybe<Auto_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAuto_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Auto_Tags_Order_By>>;
  where?: Maybe<Auto_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAuto_Tags_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootGuildsArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGuilds_AggregateArgs = {
  distinct_on?: Maybe<Array<Guilds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Guilds_Order_By>>;
  where?: Maybe<Guilds_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGuilds_By_PkArgs = {
  guild_id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootImage_ChannelsArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Channels_By_PkArgs = {
  channel_id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootImage_TagsArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImage_Tags_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootImages_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootTag_CountArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Count_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_CountsArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Counts_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Counts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Counts_Order_By>>;
  where?: Maybe<Tag_Counts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Counts_By_PkArgs = {
  name: Scalars["String"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars["String"];
};

/** columns and relationships of "tag_counts" */
export type Tag_Counts = {
  count: Scalars["bigint"];
  name: Scalars["String"];
};

/** aggregated selection of "tag_counts" */
export type Tag_Counts_Aggregate = {
  aggregate?: Maybe<Tag_Counts_Aggregate_Fields>;
  nodes: Array<Tag_Counts>;
};

/** aggregate fields of "tag_counts" */
export type Tag_Counts_Aggregate_Fields = {
  avg?: Maybe<Tag_Counts_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Tag_Counts_Max_Fields>;
  min?: Maybe<Tag_Counts_Min_Fields>;
  stddev?: Maybe<Tag_Counts_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Counts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Counts_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Counts_Sum_Fields>;
  var_pop?: Maybe<Tag_Counts_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Counts_Var_Samp_Fields>;
  variance?: Maybe<Tag_Counts_Variance_Fields>;
};

/** aggregate fields of "tag_counts" */
export type Tag_Counts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Counts_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tag_counts" */
export type Tag_Counts_Aggregate_Order_By = {
  avg?: Maybe<Tag_Counts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Counts_Max_Order_By>;
  min?: Maybe<Tag_Counts_Min_Order_By>;
  stddev?: Maybe<Tag_Counts_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Counts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Counts_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Counts_Sum_Order_By>;
  var_pop?: Maybe<Tag_Counts_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Counts_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Counts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tag_counts" */
export type Tag_Counts_Arr_Rel_Insert_Input = {
  data: Array<Tag_Counts_Insert_Input>;
  on_conflict?: Maybe<Tag_Counts_On_Conflict>;
};

/** aggregate avg on columns */
export type Tag_Counts_Avg_Fields = {
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "tag_counts" */
export type Tag_Counts_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag_counts". All fields are combined with a logical 'AND'. */
export type Tag_Counts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Counts_Bool_Exp>>>;
  _not?: Maybe<Tag_Counts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Counts_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag_counts" */
export enum Tag_Counts_Constraint {
  /** unique or primary key constraint */
  Tag_Counts_Pkey = "tag_counts_pkey"
}

/** input type for incrementing integer columne in table "tag_counts" */
export type Tag_Counts_Inc_Input = {
  count?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "tag_counts" */
export type Tag_Counts_Insert_Input = {
  count?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Tag_Counts_Max_Fields = {
  count?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "tag_counts" */
export type Tag_Counts_Max_Order_By = {
  count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Counts_Min_Fields = {
  count?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "tag_counts" */
export type Tag_Counts_Min_Order_By = {
  count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "tag_counts" */
export type Tag_Counts_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Tag_Counts>;
};

/** input type for inserting object relation for remote table "tag_counts" */
export type Tag_Counts_Obj_Rel_Insert_Input = {
  data: Tag_Counts_Insert_Input;
  on_conflict?: Maybe<Tag_Counts_On_Conflict>;
};

/** on conflict condition type for table "tag_counts" */
export type Tag_Counts_On_Conflict = {
  constraint: Tag_Counts_Constraint;
  update_columns: Array<Tag_Counts_Update_Column>;
};

/** ordering options when selecting data from "tag_counts" */
export type Tag_Counts_Order_By = {
  count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "tag_counts" */
export enum Tag_Counts_Select_Column {
  /** column name */
  Count = "count",
  /** column name */
  Name = "name"
}

/** input type for updating data in table "tag_counts" */
export type Tag_Counts_Set_Input = {
  count?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Tag_Counts_Stddev_Fields = {
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "tag_counts" */
export type Tag_Counts_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Counts_Stddev_Pop_Fields = {
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "tag_counts" */
export type Tag_Counts_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Counts_Stddev_Samp_Fields = {
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "tag_counts" */
export type Tag_Counts_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tag_Counts_Sum_Fields = {
  count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "tag_counts" */
export type Tag_Counts_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** update columns of table "tag_counts" */
export enum Tag_Counts_Update_Column {
  /** column name */
  Count = "count",
  /** column name */
  Name = "name"
}

/** aggregate var_pop on columns */
export type Tag_Counts_Var_Pop_Fields = {
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "tag_counts" */
export type Tag_Counts_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Counts_Var_Samp_Fields = {
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "tag_counts" */
export type Tag_Counts_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Counts_Variance_Fields = {
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "tag_counts" */
export type Tag_Counts_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Maybe<Scalars["timestamptz"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Maybe<Scalars["timestamptz"]>>>;
};

/** columns and relationships of "users" */
export type Users = {
  avatar?: Maybe<Scalars["String"]>;
  /** An array relationship */
  image_channels: Array<Image_Channels>;
  /** An aggregated array relationship */
  image_channels_aggregate: Image_Channels_Aggregate;
  /** An array relationship */
  image_tags: Array<Image_Tags>;
  /** An aggregated array relationship */
  image_tags_aggregate: Image_Tags_Aggregate;
  /** An array relationship */
  images: Array<Images>;
  /** An aggregated array relationship */
  images_aggregate: Images_Aggregate;
  name?: Maybe<Scalars["String"]>;
  user_id: Scalars["String"];
};

/** columns and relationships of "users" */
export type UsersImage_ChannelsArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersImage_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Channels_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Channels_Order_By>>;
  where?: Maybe<Image_Channels_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersImage_TagsArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersImage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Image_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Image_Tags_Order_By>>;
  where?: Maybe<Image_Tags_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  avatar?: Maybe<Text_Comparison_Exp>;
  image_channels?: Maybe<Image_Channels_Bool_Exp>;
  image_tags?: Maybe<Image_Tags_Bool_Exp>;
  images?: Maybe<Images_Bool_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  user_id?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  Users_Pkey = "users_pkey"
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar?: Maybe<Scalars["String"]>;
  image_channels?: Maybe<Image_Channels_Arr_Rel_Insert_Input>;
  image_tags?: Maybe<Image_Tags_Arr_Rel_Insert_Input>;
  images?: Maybe<Images_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  avatar?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  avatar?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  avatar?: Maybe<Order_By>;
  image_channels_aggregate?: Maybe<Image_Channels_Aggregate_Order_By>;
  image_tags_aggregate?: Maybe<Image_Tags_Aggregate_Order_By>;
  images_aggregate?: Maybe<Images_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Name = "name",
  /** column name */
  User_Id = "user_id"
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Name = "name",
  /** column name */
  User_Id = "user_id"
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type Auto_TagsResolvers<Context = any, ParentType = Auto_Tags> = {
  channel_id?: Resolver<Scalars["String"], ParentType, Context>;
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  image_channel?: Resolver<Image_Channels, ParentType, Context>;
  name?: Resolver<Scalars["String"], ParentType, Context>;
};

export type Auto_Tags_AggregateResolvers<
  Context = any,
  ParentType = Auto_Tags_Aggregate
> = {
  aggregate?: Resolver<Maybe<Auto_Tags_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Auto_Tags>, ParentType, Context>;
};

export type Auto_Tags_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Auto_Tags_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Auto_Tags_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Auto_Tags_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Auto_Tags_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Auto_Tags_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<
    Maybe<Auto_Tags_Stddev_Pop_Fields>,
    ParentType,
    Context
  >;
  stddev_samp?: Resolver<
    Maybe<Auto_Tags_Stddev_Samp_Fields>,
    ParentType,
    Context
  >;
  sum?: Resolver<Maybe<Auto_Tags_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Auto_Tags_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Auto_Tags_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Auto_Tags_Variance_Fields>, ParentType, Context>;
};

export type Auto_Tags_Avg_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Auto_Tags_Max_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Max_Fields
> = {
  channel_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Auto_Tags_Min_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Min_Fields
> = {
  channel_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Auto_Tags_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Auto_Tags_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Auto_Tags>, ParentType, Context>;
};

export type Auto_Tags_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Auto_Tags_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Auto_Tags_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Auto_Tags_Sum_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Auto_Tags_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Auto_Tags_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Auto_Tags_Variance_FieldsResolvers<
  Context = any,
  ParentType = Auto_Tags_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export interface BigintScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["bigint"], any> {
  name: "bigint";
}

export type GuildsResolvers<Context = any, ParentType = Guilds> = {
  enabled?: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  guild_id?: Resolver<Scalars["String"], ParentType, Context>;
  image_channels?: Resolver<
    Array<Image_Channels>,
    ParentType,
    Context,
    GuildsImage_ChannelsArgs
  >;
  image_channels_aggregate?: Resolver<
    Image_Channels_Aggregate,
    ParentType,
    Context,
    GuildsImage_Channels_AggregateArgs
  >;
  images?: Resolver<Array<Images>, ParentType, Context, GuildsImagesArgs>;
  images_aggregate?: Resolver<
    Images_Aggregate,
    ParentType,
    Context,
    GuildsImages_AggregateArgs
  >;
  name?: Resolver<Scalars["String"], ParentType, Context>;
  welcome_channel?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Guilds_AggregateResolvers<
  Context = any,
  ParentType = Guilds_Aggregate
> = {
  aggregate?: Resolver<Maybe<Guilds_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Guilds>, ParentType, Context>;
};

export type Guilds_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Aggregate_Fields
> = {
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Guilds_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Guilds_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Guilds_Min_Fields>, ParentType, Context>;
};

export type Guilds_Max_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Max_Fields
> = {
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  welcome_channel?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Guilds_Min_FieldsResolvers<
  Context = any,
  ParentType = Guilds_Min_Fields
> = {
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  welcome_channel?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Guilds_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Guilds_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Guilds>, ParentType, Context>;
};

export type Image_ChannelsResolvers<
  Context = any,
  ParentType = Image_Channels
> = {
  assigner_id?: Resolver<Scalars["String"], ParentType, Context>;
  auto_tags?: Resolver<
    Array<Auto_Tags>,
    ParentType,
    Context,
    Image_ChannelsAuto_TagsArgs
  >;
  auto_tags_aggregate?: Resolver<
    Auto_Tags_Aggregate,
    ParentType,
    Context,
    Image_ChannelsAuto_Tags_AggregateArgs
  >;
  channel_id?: Resolver<Scalars["String"], ParentType, Context>;
  guild?: Resolver<Guilds, ParentType, Context>;
  guild_id?: Resolver<Scalars["String"], ParentType, Context>;
  user?: Resolver<Users, ParentType, Context>;
};

export type Image_Channels_AggregateResolvers<
  Context = any,
  ParentType = Image_Channels_Aggregate
> = {
  aggregate?: Resolver<
    Maybe<Image_Channels_Aggregate_Fields>,
    ParentType,
    Context
  >;
  nodes?: Resolver<Array<Image_Channels>, ParentType, Context>;
};

export type Image_Channels_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Aggregate_Fields
> = {
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Image_Channels_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Image_Channels_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Image_Channels_Min_Fields>, ParentType, Context>;
};

export type Image_Channels_Max_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Max_Fields
> = {
  assigner_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  channel_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Channels_Min_FieldsResolvers<
  Context = any,
  ParentType = Image_Channels_Min_Fields
> = {
  assigner_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  channel_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Channels_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Image_Channels_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Image_Channels>, ParentType, Context>;
};

export type Image_TagsResolvers<Context = any, ParentType = Image_Tags> = {
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  image?: Resolver<Images, ParentType, Context>;
  image_id?: Resolver<Scalars["Int"], ParentType, Context>;
  name?: Resolver<Scalars["String"], ParentType, Context>;
  tagger_id?: Resolver<Scalars["String"], ParentType, Context>;
  user?: Resolver<Users, ParentType, Context>;
};

export type Image_Tags_AggregateResolvers<
  Context = any,
  ParentType = Image_Tags_Aggregate
> = {
  aggregate?: Resolver<Maybe<Image_Tags_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Image_Tags>, ParentType, Context>;
};

export type Image_Tags_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Image_Tags_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Image_Tags_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Image_Tags_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Image_Tags_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Image_Tags_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<
    Maybe<Image_Tags_Stddev_Pop_Fields>,
    ParentType,
    Context
  >;
  stddev_samp?: Resolver<
    Maybe<Image_Tags_Stddev_Samp_Fields>,
    ParentType,
    Context
  >;
  sum?: Resolver<Maybe<Image_Tags_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Image_Tags_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Image_Tags_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Image_Tags_Variance_Fields>, ParentType, Context>;
};

export type Image_Tags_Avg_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Max_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Max_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  tagger_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Tags_Min_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Min_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  tagger_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Image_Tags_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Image_Tags_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Image_Tags>, ParentType, Context>;
};

export type Image_Tags_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Sum_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Image_Tags_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Image_Tags_Variance_FieldsResolvers<
  Context = any,
  ParentType = Image_Tags_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  image_id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type ImagesResolvers<Context = any, ParentType = Images> = {
  created_at?: Resolver<Scalars["timestamptz"], ParentType, Context>;
  file_name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild?: Resolver<Maybe<Guilds>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  image_tags?: Resolver<
    Array<Image_Tags>,
    ParentType,
    Context,
    ImagesImage_TagsArgs
  >;
  image_tags_aggregate?: Resolver<
    Image_Tags_Aggregate,
    ParentType,
    Context,
    ImagesImage_Tags_AggregateArgs
  >;
  message_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url?: Resolver<Scalars["String"], ParentType, Context>;
  user?: Resolver<Maybe<Users>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Images_AggregateResolvers<
  Context = any,
  ParentType = Images_Aggregate
> = {
  aggregate?: Resolver<Maybe<Images_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Images>, ParentType, Context>;
};

export type Images_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Images_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Images_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Images_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Images_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Images_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Images_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<Maybe<Images_Stddev_Pop_Fields>, ParentType, Context>;
  stddev_samp?: Resolver<Maybe<Images_Stddev_Samp_Fields>, ParentType, Context>;
  sum?: Resolver<Maybe<Images_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Images_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Images_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Images_Variance_Fields>, ParentType, Context>;
};

export type Images_Avg_FieldsResolvers<
  Context = any,
  ParentType = Images_Avg_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Max_FieldsResolvers<
  Context = any,
  ParentType = Images_Max_Fields
> = {
  created_at?: Resolver<Maybe<Scalars["timestamptz"]>, ParentType, Context>;
  file_name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  message_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Images_Min_FieldsResolvers<
  Context = any,
  ParentType = Images_Min_Fields
> = {
  created_at?: Resolver<Maybe<Scalars["timestamptz"]>, ParentType, Context>;
  file_name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  guild_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  message_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Images_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Images_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Images>, ParentType, Context>;
};

export type Images_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Images_Stddev_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Images_Stddev_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Images_Stddev_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Sum_FieldsResolvers<
  Context = any,
  ParentType = Images_Sum_Fields
> = {
  id?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type Images_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Images_Var_Pop_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Images_Var_Samp_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Images_Variance_FieldsResolvers<
  Context = any,
  ParentType = Images_Variance_Fields
> = {
  id?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Mutation_RootResolvers<
  Context = any,
  ParentType = Mutation_Root
> = {
  delete_auto_tags?: Resolver<
    Maybe<Auto_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_Auto_TagsArgs
  >;
  delete_guilds?: Resolver<
    Maybe<Guilds_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_GuildsArgs
  >;
  delete_image_channels?: Resolver<
    Maybe<Image_Channels_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_Image_ChannelsArgs
  >;
  delete_image_tags?: Resolver<
    Maybe<Image_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_Image_TagsArgs
  >;
  delete_images?: Resolver<
    Maybe<Images_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_ImagesArgs
  >;
  delete_tag_counts?: Resolver<
    Maybe<Tag_Counts_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_Tag_CountsArgs
  >;
  delete_users?: Resolver<
    Maybe<Users_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootDelete_UsersArgs
  >;
  insert_auto_tags?: Resolver<
    Maybe<Auto_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_Auto_TagsArgs
  >;
  insert_guilds?: Resolver<
    Maybe<Guilds_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_GuildsArgs
  >;
  insert_image_channels?: Resolver<
    Maybe<Image_Channels_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_Image_ChannelsArgs
  >;
  insert_image_tags?: Resolver<
    Maybe<Image_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_Image_TagsArgs
  >;
  insert_images?: Resolver<
    Maybe<Images_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_ImagesArgs
  >;
  insert_tag_counts?: Resolver<
    Maybe<Tag_Counts_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_Tag_CountsArgs
  >;
  insert_users?: Resolver<
    Maybe<Users_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootInsert_UsersArgs
  >;
  update_auto_tags?: Resolver<
    Maybe<Auto_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_Auto_TagsArgs
  >;
  update_guilds?: Resolver<
    Maybe<Guilds_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_GuildsArgs
  >;
  update_image_channels?: Resolver<
    Maybe<Image_Channels_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_Image_ChannelsArgs
  >;
  update_image_tags?: Resolver<
    Maybe<Image_Tags_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_Image_TagsArgs
  >;
  update_images?: Resolver<
    Maybe<Images_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_ImagesArgs
  >;
  update_tag_counts?: Resolver<
    Maybe<Tag_Counts_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_Tag_CountsArgs
  >;
  update_users?: Resolver<
    Maybe<Users_Mutation_Response>,
    ParentType,
    Context,
    Mutation_RootUpdate_UsersArgs
  >;
};

export type Query_RootResolvers<Context = any, ParentType = Query_Root> = {
  auto_tags?: Resolver<
    Array<Auto_Tags>,
    ParentType,
    Context,
    Query_RootAuto_TagsArgs
  >;
  auto_tags_aggregate?: Resolver<
    Auto_Tags_Aggregate,
    ParentType,
    Context,
    Query_RootAuto_Tags_AggregateArgs
  >;
  auto_tags_by_pk?: Resolver<
    Maybe<Auto_Tags>,
    ParentType,
    Context,
    Query_RootAuto_Tags_By_PkArgs
  >;
  guilds?: Resolver<Array<Guilds>, ParentType, Context, Query_RootGuildsArgs>;
  guilds_aggregate?: Resolver<
    Guilds_Aggregate,
    ParentType,
    Context,
    Query_RootGuilds_AggregateArgs
  >;
  guilds_by_pk?: Resolver<
    Maybe<Guilds>,
    ParentType,
    Context,
    Query_RootGuilds_By_PkArgs
  >;
  image_channels?: Resolver<
    Array<Image_Channels>,
    ParentType,
    Context,
    Query_RootImage_ChannelsArgs
  >;
  image_channels_aggregate?: Resolver<
    Image_Channels_Aggregate,
    ParentType,
    Context,
    Query_RootImage_Channels_AggregateArgs
  >;
  image_channels_by_pk?: Resolver<
    Maybe<Image_Channels>,
    ParentType,
    Context,
    Query_RootImage_Channels_By_PkArgs
  >;
  image_tags?: Resolver<
    Array<Image_Tags>,
    ParentType,
    Context,
    Query_RootImage_TagsArgs
  >;
  image_tags_aggregate?: Resolver<
    Image_Tags_Aggregate,
    ParentType,
    Context,
    Query_RootImage_Tags_AggregateArgs
  >;
  image_tags_by_pk?: Resolver<
    Maybe<Image_Tags>,
    ParentType,
    Context,
    Query_RootImage_Tags_By_PkArgs
  >;
  images?: Resolver<Array<Images>, ParentType, Context, Query_RootImagesArgs>;
  images_aggregate?: Resolver<
    Images_Aggregate,
    ParentType,
    Context,
    Query_RootImages_AggregateArgs
  >;
  images_by_pk?: Resolver<
    Maybe<Images>,
    ParentType,
    Context,
    Query_RootImages_By_PkArgs
  >;
  tag_count?: Resolver<
    Array<Tag_Counts>,
    ParentType,
    Context,
    Query_RootTag_CountArgs
  >;
  tag_count_aggregate?: Resolver<
    Tag_Counts_Aggregate,
    ParentType,
    Context,
    Query_RootTag_Count_AggregateArgs
  >;
  tag_counts?: Resolver<
    Array<Tag_Counts>,
    ParentType,
    Context,
    Query_RootTag_CountsArgs
  >;
  tag_counts_aggregate?: Resolver<
    Tag_Counts_Aggregate,
    ParentType,
    Context,
    Query_RootTag_Counts_AggregateArgs
  >;
  tag_counts_by_pk?: Resolver<
    Maybe<Tag_Counts>,
    ParentType,
    Context,
    Query_RootTag_Counts_By_PkArgs
  >;
  users?: Resolver<Array<Users>, ParentType, Context, Query_RootUsersArgs>;
  users_aggregate?: Resolver<
    Users_Aggregate,
    ParentType,
    Context,
    Query_RootUsers_AggregateArgs
  >;
  users_by_pk?: Resolver<
    Maybe<Users>,
    ParentType,
    Context,
    Query_RootUsers_By_PkArgs
  >;
};

export type Subscription_RootResolvers<
  Context = any,
  ParentType = Subscription_Root
> = {
  auto_tags?: SubscriptionResolver<
    Array<Auto_Tags>,
    ParentType,
    Context,
    Subscription_RootAuto_TagsArgs
  >;
  auto_tags_aggregate?: SubscriptionResolver<
    Auto_Tags_Aggregate,
    ParentType,
    Context,
    Subscription_RootAuto_Tags_AggregateArgs
  >;
  auto_tags_by_pk?: SubscriptionResolver<
    Maybe<Auto_Tags>,
    ParentType,
    Context,
    Subscription_RootAuto_Tags_By_PkArgs
  >;
  guilds?: SubscriptionResolver<
    Array<Guilds>,
    ParentType,
    Context,
    Subscription_RootGuildsArgs
  >;
  guilds_aggregate?: SubscriptionResolver<
    Guilds_Aggregate,
    ParentType,
    Context,
    Subscription_RootGuilds_AggregateArgs
  >;
  guilds_by_pk?: SubscriptionResolver<
    Maybe<Guilds>,
    ParentType,
    Context,
    Subscription_RootGuilds_By_PkArgs
  >;
  image_channels?: SubscriptionResolver<
    Array<Image_Channels>,
    ParentType,
    Context,
    Subscription_RootImage_ChannelsArgs
  >;
  image_channels_aggregate?: SubscriptionResolver<
    Image_Channels_Aggregate,
    ParentType,
    Context,
    Subscription_RootImage_Channels_AggregateArgs
  >;
  image_channels_by_pk?: SubscriptionResolver<
    Maybe<Image_Channels>,
    ParentType,
    Context,
    Subscription_RootImage_Channels_By_PkArgs
  >;
  image_tags?: SubscriptionResolver<
    Array<Image_Tags>,
    ParentType,
    Context,
    Subscription_RootImage_TagsArgs
  >;
  image_tags_aggregate?: SubscriptionResolver<
    Image_Tags_Aggregate,
    ParentType,
    Context,
    Subscription_RootImage_Tags_AggregateArgs
  >;
  image_tags_by_pk?: SubscriptionResolver<
    Maybe<Image_Tags>,
    ParentType,
    Context,
    Subscription_RootImage_Tags_By_PkArgs
  >;
  images?: SubscriptionResolver<
    Array<Images>,
    ParentType,
    Context,
    Subscription_RootImagesArgs
  >;
  images_aggregate?: SubscriptionResolver<
    Images_Aggregate,
    ParentType,
    Context,
    Subscription_RootImages_AggregateArgs
  >;
  images_by_pk?: SubscriptionResolver<
    Maybe<Images>,
    ParentType,
    Context,
    Subscription_RootImages_By_PkArgs
  >;
  tag_count?: SubscriptionResolver<
    Array<Tag_Counts>,
    ParentType,
    Context,
    Subscription_RootTag_CountArgs
  >;
  tag_count_aggregate?: SubscriptionResolver<
    Tag_Counts_Aggregate,
    ParentType,
    Context,
    Subscription_RootTag_Count_AggregateArgs
  >;
  tag_counts?: SubscriptionResolver<
    Array<Tag_Counts>,
    ParentType,
    Context,
    Subscription_RootTag_CountsArgs
  >;
  tag_counts_aggregate?: SubscriptionResolver<
    Tag_Counts_Aggregate,
    ParentType,
    Context,
    Subscription_RootTag_Counts_AggregateArgs
  >;
  tag_counts_by_pk?: SubscriptionResolver<
    Maybe<Tag_Counts>,
    ParentType,
    Context,
    Subscription_RootTag_Counts_By_PkArgs
  >;
  users?: SubscriptionResolver<
    Array<Users>,
    ParentType,
    Context,
    Subscription_RootUsersArgs
  >;
  users_aggregate?: SubscriptionResolver<
    Users_Aggregate,
    ParentType,
    Context,
    Subscription_RootUsers_AggregateArgs
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<Users>,
    ParentType,
    Context,
    Subscription_RootUsers_By_PkArgs
  >;
};

export type Tag_CountsResolvers<Context = any, ParentType = Tag_Counts> = {
  count?: Resolver<Scalars["bigint"], ParentType, Context>;
  name?: Resolver<Scalars["String"], ParentType, Context>;
};

export type Tag_Counts_AggregateResolvers<
  Context = any,
  ParentType = Tag_Counts_Aggregate
> = {
  aggregate?: Resolver<Maybe<Tag_Counts_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Tag_Counts>, ParentType, Context>;
};

export type Tag_Counts_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Aggregate_Fields
> = {
  avg?: Resolver<Maybe<Tag_Counts_Avg_Fields>, ParentType, Context>;
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Tag_Counts_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Tag_Counts_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Tag_Counts_Min_Fields>, ParentType, Context>;
  stddev?: Resolver<Maybe<Tag_Counts_Stddev_Fields>, ParentType, Context>;
  stddev_pop?: Resolver<
    Maybe<Tag_Counts_Stddev_Pop_Fields>,
    ParentType,
    Context
  >;
  stddev_samp?: Resolver<
    Maybe<Tag_Counts_Stddev_Samp_Fields>,
    ParentType,
    Context
  >;
  sum?: Resolver<Maybe<Tag_Counts_Sum_Fields>, ParentType, Context>;
  var_pop?: Resolver<Maybe<Tag_Counts_Var_Pop_Fields>, ParentType, Context>;
  var_samp?: Resolver<Maybe<Tag_Counts_Var_Samp_Fields>, ParentType, Context>;
  variance?: Resolver<Maybe<Tag_Counts_Variance_Fields>, ParentType, Context>;
};

export type Tag_Counts_Avg_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Avg_Fields
> = {
  count?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Tag_Counts_Max_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Max_Fields
> = {
  count?: Resolver<Maybe<Scalars["bigint"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Tag_Counts_Min_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Min_Fields
> = {
  count?: Resolver<Maybe<Scalars["bigint"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Tag_Counts_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Tag_Counts_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Tag_Counts>, ParentType, Context>;
};

export type Tag_Counts_Stddev_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Stddev_Fields
> = {
  count?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Tag_Counts_Stddev_Pop_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Stddev_Pop_Fields
> = {
  count?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Tag_Counts_Stddev_Samp_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Stddev_Samp_Fields
> = {
  count?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Tag_Counts_Sum_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Sum_Fields
> = {
  count?: Resolver<Maybe<Scalars["bigint"]>, ParentType, Context>;
};

export type Tag_Counts_Var_Pop_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Var_Pop_Fields
> = {
  count?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Tag_Counts_Var_Samp_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Var_Samp_Fields
> = {
  count?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Tag_Counts_Variance_FieldsResolvers<
  Context = any,
  ParentType = Tag_Counts_Variance_Fields
> = {
  count?: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["timestamptz"], any> {
  name: "timestamptz";
}

export type UsersResolvers<Context = any, ParentType = Users> = {
  avatar?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  image_channels?: Resolver<
    Array<Image_Channels>,
    ParentType,
    Context,
    UsersImage_ChannelsArgs
  >;
  image_channels_aggregate?: Resolver<
    Image_Channels_Aggregate,
    ParentType,
    Context,
    UsersImage_Channels_AggregateArgs
  >;
  image_tags?: Resolver<
    Array<Image_Tags>,
    ParentType,
    Context,
    UsersImage_TagsArgs
  >;
  image_tags_aggregate?: Resolver<
    Image_Tags_Aggregate,
    ParentType,
    Context,
    UsersImage_Tags_AggregateArgs
  >;
  images?: Resolver<Array<Images>, ParentType, Context, UsersImagesArgs>;
  images_aggregate?: Resolver<
    Images_Aggregate,
    ParentType,
    Context,
    UsersImages_AggregateArgs
  >;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Scalars["String"], ParentType, Context>;
};

export type Users_AggregateResolvers<
  Context = any,
  ParentType = Users_Aggregate
> = {
  aggregate?: Resolver<Maybe<Users_Aggregate_Fields>, ParentType, Context>;
  nodes?: Resolver<Array<Users>, ParentType, Context>;
};

export type Users_Aggregate_FieldsResolvers<
  Context = any,
  ParentType = Users_Aggregate_Fields
> = {
  count?: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context,
    Users_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<Maybe<Users_Max_Fields>, ParentType, Context>;
  min?: Resolver<Maybe<Users_Min_Fields>, ParentType, Context>;
};

export type Users_Max_FieldsResolvers<
  Context = any,
  ParentType = Users_Max_Fields
> = {
  avatar?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Users_Min_FieldsResolvers<
  Context = any,
  ParentType = Users_Min_Fields
> = {
  avatar?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_id?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Users_Mutation_ResponseResolvers<
  Context = any,
  ParentType = Users_Mutation_Response
> = {
  affected_rows?: Resolver<Scalars["Int"], ParentType, Context>;
  returning?: Resolver<Array<Users>, ParentType, Context>;
};

export type Resolvers<Context = any> = {
  auto_tags?: Auto_TagsResolvers<Context>;
  auto_tags_aggregate?: Auto_Tags_AggregateResolvers<Context>;
  auto_tags_aggregate_fields?: Auto_Tags_Aggregate_FieldsResolvers<Context>;
  auto_tags_avg_fields?: Auto_Tags_Avg_FieldsResolvers<Context>;
  auto_tags_max_fields?: Auto_Tags_Max_FieldsResolvers<Context>;
  auto_tags_min_fields?: Auto_Tags_Min_FieldsResolvers<Context>;
  auto_tags_mutation_response?: Auto_Tags_Mutation_ResponseResolvers<Context>;
  auto_tags_stddev_fields?: Auto_Tags_Stddev_FieldsResolvers<Context>;
  auto_tags_stddev_pop_fields?: Auto_Tags_Stddev_Pop_FieldsResolvers<Context>;
  auto_tags_stddev_samp_fields?: Auto_Tags_Stddev_Samp_FieldsResolvers<Context>;
  auto_tags_sum_fields?: Auto_Tags_Sum_FieldsResolvers<Context>;
  auto_tags_var_pop_fields?: Auto_Tags_Var_Pop_FieldsResolvers<Context>;
  auto_tags_var_samp_fields?: Auto_Tags_Var_Samp_FieldsResolvers<Context>;
  auto_tags_variance_fields?: Auto_Tags_Variance_FieldsResolvers<Context>;
  bigint?: GraphQLScalarType;
  guilds?: GuildsResolvers<Context>;
  guilds_aggregate?: Guilds_AggregateResolvers<Context>;
  guilds_aggregate_fields?: Guilds_Aggregate_FieldsResolvers<Context>;
  guilds_max_fields?: Guilds_Max_FieldsResolvers<Context>;
  guilds_min_fields?: Guilds_Min_FieldsResolvers<Context>;
  guilds_mutation_response?: Guilds_Mutation_ResponseResolvers<Context>;
  image_channels?: Image_ChannelsResolvers<Context>;
  image_channels_aggregate?: Image_Channels_AggregateResolvers<Context>;
  image_channels_aggregate_fields?: Image_Channels_Aggregate_FieldsResolvers<
    Context
  >;
  image_channels_max_fields?: Image_Channels_Max_FieldsResolvers<Context>;
  image_channels_min_fields?: Image_Channels_Min_FieldsResolvers<Context>;
  image_channels_mutation_response?: Image_Channels_Mutation_ResponseResolvers<
    Context
  >;
  image_tags?: Image_TagsResolvers<Context>;
  image_tags_aggregate?: Image_Tags_AggregateResolvers<Context>;
  image_tags_aggregate_fields?: Image_Tags_Aggregate_FieldsResolvers<Context>;
  image_tags_avg_fields?: Image_Tags_Avg_FieldsResolvers<Context>;
  image_tags_max_fields?: Image_Tags_Max_FieldsResolvers<Context>;
  image_tags_min_fields?: Image_Tags_Min_FieldsResolvers<Context>;
  image_tags_mutation_response?: Image_Tags_Mutation_ResponseResolvers<Context>;
  image_tags_stddev_fields?: Image_Tags_Stddev_FieldsResolvers<Context>;
  image_tags_stddev_pop_fields?: Image_Tags_Stddev_Pop_FieldsResolvers<Context>;
  image_tags_stddev_samp_fields?: Image_Tags_Stddev_Samp_FieldsResolvers<
    Context
  >;
  image_tags_sum_fields?: Image_Tags_Sum_FieldsResolvers<Context>;
  image_tags_var_pop_fields?: Image_Tags_Var_Pop_FieldsResolvers<Context>;
  image_tags_var_samp_fields?: Image_Tags_Var_Samp_FieldsResolvers<Context>;
  image_tags_variance_fields?: Image_Tags_Variance_FieldsResolvers<Context>;
  images?: ImagesResolvers<Context>;
  images_aggregate?: Images_AggregateResolvers<Context>;
  images_aggregate_fields?: Images_Aggregate_FieldsResolvers<Context>;
  images_avg_fields?: Images_Avg_FieldsResolvers<Context>;
  images_max_fields?: Images_Max_FieldsResolvers<Context>;
  images_min_fields?: Images_Min_FieldsResolvers<Context>;
  images_mutation_response?: Images_Mutation_ResponseResolvers<Context>;
  images_stddev_fields?: Images_Stddev_FieldsResolvers<Context>;
  images_stddev_pop_fields?: Images_Stddev_Pop_FieldsResolvers<Context>;
  images_stddev_samp_fields?: Images_Stddev_Samp_FieldsResolvers<Context>;
  images_sum_fields?: Images_Sum_FieldsResolvers<Context>;
  images_var_pop_fields?: Images_Var_Pop_FieldsResolvers<Context>;
  images_var_samp_fields?: Images_Var_Samp_FieldsResolvers<Context>;
  images_variance_fields?: Images_Variance_FieldsResolvers<Context>;
  mutation_root?: Mutation_RootResolvers<Context>;
  query_root?: Query_RootResolvers<Context>;
  subscription_root?: Subscription_RootResolvers<Context>;
  tag_counts?: Tag_CountsResolvers<Context>;
  tag_counts_aggregate?: Tag_Counts_AggregateResolvers<Context>;
  tag_counts_aggregate_fields?: Tag_Counts_Aggregate_FieldsResolvers<Context>;
  tag_counts_avg_fields?: Tag_Counts_Avg_FieldsResolvers<Context>;
  tag_counts_max_fields?: Tag_Counts_Max_FieldsResolvers<Context>;
  tag_counts_min_fields?: Tag_Counts_Min_FieldsResolvers<Context>;
  tag_counts_mutation_response?: Tag_Counts_Mutation_ResponseResolvers<Context>;
  tag_counts_stddev_fields?: Tag_Counts_Stddev_FieldsResolvers<Context>;
  tag_counts_stddev_pop_fields?: Tag_Counts_Stddev_Pop_FieldsResolvers<Context>;
  tag_counts_stddev_samp_fields?: Tag_Counts_Stddev_Samp_FieldsResolvers<
    Context
  >;
  tag_counts_sum_fields?: Tag_Counts_Sum_FieldsResolvers<Context>;
  tag_counts_var_pop_fields?: Tag_Counts_Var_Pop_FieldsResolvers<Context>;
  tag_counts_var_samp_fields?: Tag_Counts_Var_Samp_FieldsResolvers<Context>;
  tag_counts_variance_fields?: Tag_Counts_Variance_FieldsResolvers<Context>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<Context>;
  users_aggregate?: Users_AggregateResolvers<Context>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<Context>;
  users_max_fields?: Users_Max_FieldsResolvers<Context>;
  users_min_fields?: Users_Min_FieldsResolvers<Context>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = any> = Resolvers<Context>;
