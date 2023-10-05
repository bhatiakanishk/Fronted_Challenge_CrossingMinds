import { wait } from '@crossingminds/utils'
import { data } from './itemData'

type GetMockItemDataParam = {
  /** Set this property to `true` to occasional simulate an API error some percentage of the time. */
  simulateRandomError?: boolean
}

const ITEM_COUNT = 12

/** Returns mock data for use in carousels */
export async function getMockItemData({simulateRandomError}: GetMockItemDataParam = {}) {
  console.count('[getMockItemData] call count')
  await wait(150 + (Math.random() * 1850))

  if (simulateRandomError) {
    if (Math.random() < 0.1) {
      throw new Error('[getMockItemData] Random error')
    }
  }

  const lastStartIndex = data.length - ITEM_COUNT
  const startIndex = Math.floor(Math.random() * lastStartIndex)

  return data.slice(startIndex, startIndex + ITEM_COUNT)
} 