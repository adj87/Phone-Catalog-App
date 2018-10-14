import { host } from './config'

export default () => {
  return fetch(host + '/phones').then(response => response.json())
}
