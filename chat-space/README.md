# DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|


### Association

- has_many :messages
- has_many :members
- has_many :groups, through: :members


## groups table

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|


### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members


## messages table

|Column|Type|Options|
|------|----|-------|
|body|text| |
|image|string| |
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|



### Asociation

- belongs_to :user
- belongs_to :group


## members table

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Asociation
- belongs_to :user
- belongs_to :group
