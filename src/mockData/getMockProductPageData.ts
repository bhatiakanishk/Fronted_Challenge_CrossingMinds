import { KeyValuePairs, wait } from '@crossingminds/utils'
import { data } from './productPageData'

/* 
A note on challenge requirements:
You're only required to create a product page for a single product. This mock API can return data for many different products. It's OK to choose a single handle and hard code it.
*/

type GetMockProductPageDataParam = {
  /** The `handle` property is required. It determines which item to return. The term `handle` refers to a unique url-friendly id for the product.
   * @example "sandy-ss-12996" */
  handle: string,
  /** Set this property to `true` to occasional simulate an API error some percentage of the time. */
  simulateRandomError?: boolean
}

/** Returns mock data for use in the product details section of the page */
export async function getMockProductPageData({simulateRandomError, handle}: GetMockProductPageDataParam = {handle: ''}) {
  console.count('[getMockProductPageData] call count')
  await wait(150 + (Math.random() * 1850))

  if (simulateRandomError) {
    if (Math.random() < 0.1) {
      throw new Error('[getMockProductPageData] Random error')
    }
  }

  const item = data.find(item => (item?.value as KeyValuePairs)?.handle === handle)

  if (!item) {
    throw new Error(`[getMockProductPageData] Item not found. Please provide a valid \`handle\` property. \n\nAvailable values are: ${data.map(item => (item?.value as KeyValuePairs)?.handle).join(', ')}`)
  }

  return item
} 