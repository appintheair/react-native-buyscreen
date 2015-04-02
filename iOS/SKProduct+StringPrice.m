//
// Created by Sergey Pronin on 7/2/13.
// Copyright (c) 2013-present App in the Air. All rights reserved.
//


#import "SKProduct+StringPrice.h"


@implementation SKProduct (StringPrice)

- (NSString *)priceString {
    NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
    formatter.formatterBehavior = NSNumberFormatterBehavior10_4;
    formatter.numberStyle = NSNumberFormatterCurrencyStyle;
    formatter.locale = self.priceLocale;

    return [formatter stringFromNumber:self.price];
}

- (NSString *)currencyCode {
    NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
    [formatter setNumberStyle:NSNumberFormatterCurrencyStyle];
    [formatter setLocale:self.priceLocale];
    return formatter.currencyCode;
}

@end