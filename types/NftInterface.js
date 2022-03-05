"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingType = exports.OrderSide = void 0;
var OrderSide;
(function (OrderSide) {
    OrderSide[OrderSide["Buy"] = 0] = "Buy";
    OrderSide[OrderSide["Sell"] = 1] = "Sell";
})(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
var ListingType;
(function (ListingType) {
    ListingType["FixedPrice"] = "fixedPrice";
    ListingType["DutchAuction"] = "dutchAuction";
    ListingType["EnglishAuction"] = "englishAuction";
})(ListingType = exports.ListingType || (exports.ListingType = {}));
