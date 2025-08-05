import type { Schema, Struct } from '@strapi/strapi';

export interface SharedImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_imgs';
  info: {
    displayName: 'Img';
  };
  attributes: {
    Alt: Schema.Attribute.String & Schema.Attribute.Required;
    Img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    Content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionWithImageOnLeft extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_with_image_on_lefts';
  info: {
    displayName: 'SectionWithImage';
  };
  attributes: {
    Content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Image: Schema.Attribute.Component<'shared.img', false> &
      Schema.Attribute.Required;
    ImagePlace: Schema.Attribute.Enumeration<
      ['LeftSide', 'RightSide', 'UnderTitle']
    > &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.img': SharedImg;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.section-with-image-on-left': SharedSectionWithImageOnLeft;
    }
  }
}
