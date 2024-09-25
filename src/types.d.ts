interface StrapiResponse<Data> {
  data: Data;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface CategoryData {
  id: 4;
  attributes: {
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface BlogData {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    blog: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    categories: {
      data: CategoryData[];
    };
    thumbnail: {
      data: {
        id: number;
        attributes: {
          url;
        };
      };
    };
  };
}
