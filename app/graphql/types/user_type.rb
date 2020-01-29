module Types
  class UserType < Types::BaseObject    
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :posts, [Types::PostType], null: true
    field :post_count, Integer, null: true

    def post_count
      object.post.size
    end
  end
end
