10.times do |i|
  Idea.create(
    title: "Title#{i}",
    body: "Body#{i}",
    quality: 0)
end

10.times do |i|
  Idea.create(
    title: "Title#{i + 10}",
    body: "Body#{i + 10}",
    quality: 1)
end

10.times do |i|
  Idea.create(
    title: "Title#{i + 20}",
    body: "Body#{i + 20}",
    quality: 2)
end