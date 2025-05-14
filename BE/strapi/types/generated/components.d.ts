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
    enum: Schema.Attribute.Enumeration<
      [
        'SERVICES OVERVIEW',
        'UI/UX DESIGN',
        'WEB EXPERIENCE',
        'BRAND STRATEGY',
        'VIDEO STORYTELLING',
        'DIGITAL MARKETING',
      ]
    >;
    href: Schema.Attribute.String;
    isSelected: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    linkEnum: Schema.Attribute.Enumeration<
      [
        '/servicesoverview',
        '/uiuxdesign',
        '/webexperience',
        '/brandstrategy',
        '/videostorytelling',
        '/digitalmarketing',
      ]
    >;
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
    link: Schema.Attribute.Component<'shared.repeatable-text', true>;
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
    displayName: 'Repeatable text';
  };
  attributes: {
    text: Schema.Attribute.Text;
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
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header-logo.contact-header': HeaderLogoContactHeader;
      'header-logo.link-header': HeaderLogoLinkHeader;
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
    }
  }
}
