import { $ajax, $post, $get } from '../plugins/axios';
import Vue from 'vue';
import * as common from './common';
import * as comment from './comment';

Vue.prototype.$http = {
  $ajax,
  $get,
  $post,
  ...common,
  ...comment
}