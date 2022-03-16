export interface Erc721Metadata {
  /**
   * name of the item
   */
  name: string;

  /**
   * title of the item
   */
  title: string;

  /**
   * URL to the image of the item
   */
  image: string;

  /**
   * raw svg image data
   */
  image_data: string;

  external_url: string;

  /**
   * description of the item
   */
  description: string;

  /**
   * background color of th item
   * 6 decimal hexadecimal without #
   */
  background_color: string;

  /**
   * URL to a multi-media attachment for the item
   */
  animation_url: string;

  /**
   * URL to a youtube video
   */
  youtube_url: string;

  attributes: Erc721Attribute[];
}

/**
 *
 *
 * ATTRIBUTES
 *
 *
 */

export enum DisplayType {
  Date = 'date',
  Number = 'number',
  BoostNumber = 'boost_number',
  BoostPercentage = 'boost_percentage'
}

export interface DateAttribute {
  value: number;
  display_type: DisplayType.Date;
  trait_type: string;
}

export interface NumberAttribute {
  value: number;
  display_type: DisplayType.Number;
  trait_type: string;
}

export interface BoostNumberAttribute {
  value: number;
  display_type: DisplayType.BoostNumber;
  trait_type: string;
}

export interface BoostPercentageAttribute {
  value: number;
  display_type: DisplayType.BoostPercentage;
  trait_type: string;
}

export interface Attribute {
  value: string | number;
  trait_type?: string;
}

export type Erc721Attribute =
  | Attribute
  | DateAttribute
  | NumberAttribute
  | BoostNumberAttribute
  | BoostPercentageAttribute;
