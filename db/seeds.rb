10.times do |i|
  Idea.create(
    title: "Title#{i}",
    body: "Body#{i}")
end