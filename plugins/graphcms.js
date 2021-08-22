import { GraphQLClient } from 'graphql-request'

const graphcmsClient = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cksn7c2px15ib01yu48iz16br/master'
)

export default (_, inject) => {
  inject('graphcms', graphcmsClient)
}
