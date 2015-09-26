//
//  InAppUtils.m
//  AitaBuyscreen
//
//  Created by Sergey Pronin on 4/1/15.
//  Copyright (c) 2015 App in the Air. All rights reserved.
//

#import "InAppUtils.h"
#import "RCTLog.h"

#import "SKProduct+StringPrice.h"

@implementation InAppUtils

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(purchaseProductWithIdentifier:(NSString *)identifier completion:(RCTResponseSenderBlock)completion) {
    RCTLogInfo(@"purchasing product %@", identifier);
    
    //TODO: add real purchase logic
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
       completion(@[[NSNull null]]);
    });
}

RCT_EXPORT_METHOD(loadProducts:(RCTResponseSenderBlock)completion) {
    RCTLogInfo(@"loading products");
    
    //TODO: add real loading product + getting prices
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        completion(@[@"Cannot fetch products", [NSNull null]]);
    });
//    [[BPStoreObserver sharedObserver] processProductRequests:@[@"inapp1", @"inapp2", @"inapp3"]
//                                                    callback:^(BOOL success, id results) {
//                                                        if (success) {
//                                                            NSMutableArray *products = [NSMutableArray array];
//                                                            NSArray *inapps = [self currentInAppConfiguration];
//                                                            for (NSString *key in [results allKeys]) {
//                                                                SKProduct *product = results[key];
//                                                                NSString *count = nil;
//                                                                NSString *measure = nil;
//                                                                NSString *description = nil;
//                                                                for (NSDictionary *inapp in inapps) {
//                                                                    if ([inapp[@"identifier"] isEqualToString:key]) {
//                                                                        count = inapp[@"count"];
//                                                                        measure = inapp[@"measure"];
//                                                                        description = inapp[@"description"];
//                                                                    }
//                                                                }
//                                                                [products addObject:@{
//                                                                    @"count": count,
//                                                                    @"measure": measure,
//                                                                    @"description": description,
//                                                                    @"identifier": product.productIdentifier,
//                                                                    @"price": @(product.price.doubleValue),
//                                                                    @"priceString": product.priceString
//                                                                }];
//                                                            }
//                                                            [products sortUsingComparator:^NSComparisonResult(NSDictionary *obj1, NSDictionary *obj2) {
//                                                                return [obj1[@"price"] compare:obj2[@"price"]];
//                                                            }];
//                                                            completion(@[[NSNull null], products]);
//                                                        } else {
//                                                            completion(@[@"Cannot fetch products", [NSNull null]]);
//                                                        }
//                                                    }];
}

- (NSDictionary *)constantsToExport {
    return @{
        @"defaultConfiguration": [self currentInAppConfiguration],
    };
}

//TODO: change in-app identifiers to real ones
- (NSArray *)currentInAppConfiguration {
   return @[
      @{
          @"count": @"5",
          @"measure": @"Flights",
          @"description": @"—",
          @"price": @0.99,
          @"priceString": @"$0.99",
          @"identifier": @"inapp1"
          },
      @{
          @"count": @"1",
          @"measure": @"Year",
          @"description": @"Unlimited",
          @"price": @10.99,
          @"priceString": @"$10.99",
          @"identifier": @"inapp2"
          },
      @{
          @"count": @"∞",
          @"measure": @"Lifetime",
          @"description": @"Unlimited",
          @"price": @74.99,
          @"priceString": @"$74.99",
          @"identifier": @"inapp3"
          }
      ];
}

@end
