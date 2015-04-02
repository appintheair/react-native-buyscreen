//
// Created by Sergey Pronin on 7/2/13.
// Copyright (c) 2013-present App in the Air. All rights reserved.
//


#import <Foundation/Foundation.h>
#import <StoreKit/StoreKit.h>

@interface SKProduct (StringPrice)

@property (nonatomic, readonly) NSString *priceString;
@property (nonatomic, readonly) NSString *currencyCode;

@end