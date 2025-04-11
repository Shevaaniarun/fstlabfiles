student=[
 { name: "Alice", grade: "A" },
 { name: "Bob", grade: "B" },
 { name: "Charlie", grade: "A" },
 { name: "David", grade: "C" }
]

grades={}

for(let i=0;i<student.length;i++)
{
    grades[student[i].grade]=[]
}
for(let i=0;i<student.length;i++)
{
    a=student[i].grade
    grades[a].push(student[i].name)
}    
grades
