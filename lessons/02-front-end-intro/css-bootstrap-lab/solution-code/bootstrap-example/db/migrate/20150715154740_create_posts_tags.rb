class CreatePostsTags < ActiveRecord::Migration
  def change
    create_join_table :posts, :tags
  end
end
