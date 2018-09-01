FactoryBot.define do
  factory :message do
    body Faker::Lorem.sentence
    image File.open("spec/fixtures/files/goriIMGL9697_TP_V.jpg")
    group
    user
  end
end
