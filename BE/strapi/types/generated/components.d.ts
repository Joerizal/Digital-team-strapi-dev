import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderLogoContactHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_logo_contact_headers';
  info: {
    description: '';
    displayName: 'ContactHeader';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    phoneIcon: Schema.Attribute.Media<'images'>;
  };
}

export interface HeaderLogoLinkHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_logo_link_headers';
  info: {
    description: '';
    displayName: 'LinkHeader';
  };
  attributes: {
    href: Schema.Attribute.String;
    isSelected: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    linkServices: Schema.Attribute.Component<'header-logo.link-services', true>;
  };
}

export interface HeaderLogoLinkServices extends Struct.ComponentSchema {
  collectionName: 'components_header_logo_link_services';
  info: {
    displayName: 'linkServices';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HeaderLogoLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_logo_logos';
  info: {
    description: '';
    displayName: 'logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface HeaderLogoSearchLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_logo_search_logos';
  info: {
    description: '';
    displayName: 'SearchLogo';
  };
  attributes: {
    searchIcon: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    Header: Schema.Attribute.String;
    isLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Links: Schema.Attribute.Component<'shared.repeatable-text', true>;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files', true>;
    isLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRepeatableText extends Struct.ComponentSchema {
  collectionName: 'components_shared_repeatable_texts';
  info: {
    description: '';
    displayName: 'Repeatable text';
  };
  attributes: {
    Header: Schema.Attribute.Text;
    Link: Schema.Attribute.Text;
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
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    description: Schema.Attribute.Text;
    files: Schema.Attribute.Media<'images'>;
    files2: Schema.Attribute.Media<'images'>;
    href: Schema.Attribute.String;
    textButton: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface SharedTextLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_links';
  info: {
    description: '';
    displayName: 'Text Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.media', false>;
    text: Schema.Attribute.Component<'shared.text', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header-logo.contact-header': HeaderLogoContactHeader;
      'header-logo.link-header': HeaderLogoLinkHeader;
      'header-logo.link-services': HeaderLogoLinkServices;
      'header-logo.logo': HeaderLogoLogo;
      'header-logo.search-logo': HeaderLogoSearchLogo;
      'shared.link': SharedLink;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.repeatable-text': SharedRepeatableText;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
      'shared.text-link': SharedTextLink;
    }
  }
}
