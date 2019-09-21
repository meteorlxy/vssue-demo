import Vue from 'vue'
import Vssue from 'vssue'
import GithubV3 from '@vssue/api-github-v3'
import 'vssue/dist/vssue.css'

Vue.use(Vssue, {
  api: GithubV3,
  owner: 'meteorlxy',
  repo: 'vssue-demo',
  clientId: '083b98e0d6526ce0a4a5',
  clientSecret: 'f41adb2b6ae9a79b09cb852e4b8fa58f325af487',
})

Vue.use(Vssue)
