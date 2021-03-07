import { $ajax, $post, $get } from '../plugins/axios';
import Vue from 'vue';
import * as common from './common';
import * as classification from './classification';
import * as comment from './comment';
import * as file from './file';
import * as link from './link';
import * as tag from './tag';
import * as article from './article';
import * as user from './user';

Vue.prototype.$http = {
  $ajax,
  $get,
  $post,
  ...common,
  ...article,
  ...classification,
  ...comment,
  ...file,
  ...link,
  ...tag,
  ...user,
}

