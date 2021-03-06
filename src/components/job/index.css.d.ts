declare namespace IndexCssModule {
  export interface IIndexCss {
    employerName: string;
    expiredDate: string;
    jobStyle: string;
    jobTitle: string;
    publishedDate: string;
    seeMoreDetail: string;
  }
}

declare const IndexCssModule: IndexCssModule.IIndexCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexCssModule.IIndexCss;
};

export = IndexCssModule;
