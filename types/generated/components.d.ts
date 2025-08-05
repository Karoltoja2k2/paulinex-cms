import type { Schema, Struct } from '@strapi/strapi';

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
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionWithImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_with_images';
  info: {
    displayName: 'SectionWithImage';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'above', 'under']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.section-with-image': SharedSectionWithImage;
    }
  }
}
