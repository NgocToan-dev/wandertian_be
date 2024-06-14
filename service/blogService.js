import enumeration from "../common/enum.js";
import BlogRepo from "../repository/blogRepo.js";
import BaseService from "./_baseService.js";

class BlogService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new BlogRepo();
  }
  async getPaging(payload) {
    this.customColumn = this.customColumn(payload.filterStatus);
    return this._baseRepo.getPaging(payload);
  }
  customColumn(postStatus) {
    switch (postStatus) {
      case enumeration.postStatus.DRAFT:
        return [
          "title",
          "content",
          "tag",
          "category",
          "postStatus",
          "createdDate",
          "updatedDate",
        ];
      case enumeration.postStatus.PUBLISHED:
        return [
          "title",
          "tag",
          "category",
          "postStatus",
          "createdDate",
          "description",
        ];
      default:
        return "*";
    }
  }

  async getByTag(tag) {
    return await this._baseRepo.getByTag(tag);
  }
  async getByCategory(category, limit, post_ids) {
    return await this._baseRepo.getByCategory(category, limit, post_ids);
  }
}

export default BlogService;
