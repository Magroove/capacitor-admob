// This enum should be keep in sync with their native equivalents with the same name
export enum RewardAdPluginEvents {
  /**
   * Emits after trying to prepare a RewardAd and the Video is loaded and ready to be show
   */
  Loaded = 'onRewardedVideoAdLoaded',
  /**
   * Emits after trying to prepare a RewardAd when it could not be loaded
   */
  FailedToLoad = 'onRewardedVideoAdFailedToLoad',
  /**
   * Emits when the AdReward video is visible to the user
   */
  Showed = 'onRewardedVideoAdShowed',
  /**
   * Emits when the AdReward video is failed to show
   */
  FailedToShow = 'onRewardedVideoAdFailedToShow',
  /**
   * Emits when the AdReward video is not visible to the user anymore.
   *
   * **Important**: This has nothing to do with the reward it self. This event
   * will emits in this two cases:
   * 1. The user starts the video ad but close it before the reward emit.
   * 2. The user start the video and see it until end, then gets the reward
   * and after that the ad is closed.
   */
  Dismissed= 'onRewardedVideoAdDismissed',
  /**
   * Emits when user get rewarded from AdReward
   */
  Rewarded= 'onRewardedVideoAdReward',
  /**
   * Emits when the Interstitial ad is clicked by the user
   */
  Clicked = 'onRewardedVideoAdClicked'
}
