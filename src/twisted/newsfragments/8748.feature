twisted.internet.defer.Deferred.asFuture and twisted.internet.defer.Deferred.fromFuture were added, allowing for easy transitions between asyncio coroutines (which await Futures) and twisted coroutines (which await Deferreds).
