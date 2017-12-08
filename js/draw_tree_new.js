(() => { window.turtle_code =  
`import turtle
from random import randint

leaf_colors = ["#F3E5F5", "#FCE4EC", "#F8BBD0", "#FFEBEE", "#FFCDD2"]
wood_color = "#795548"

def branch(t, length, angle, scale):
    if length < 4:
        t.color(leaf_colors[randint(0,4)])
        t.begin_fill()
        t.circle(randint(1,3))
        t.end_fill()
        t.color(wood_color)
        return
    random_degree = randint(-5, 5)
    t.pensize(int(2.1 * length * scale * .07))
    t.forward(length)
    t.left(angle + random_degree)
    branch(t, (randint(-15, 20) + length) * scale, angle + randint(-5, 5) * scale, scale - 0.05)
    t.right(angle * 2 + random_degree)
    branch(t, (randint(-15 - (length // 4), 20) + length) * scale, angle + randint(-5, 5) * scale, scale - 0.04)
    branch(t, randint(-25, 10) * scale, randint(0, 45), scale)
    t.left(angle + 180)
    t.forward(length)
    t.left(180)

def draw_tree():
    t = turtle.Turtle()
    t.hideturtle()
    t.penup()
    t.setpos(0, -200)
    t.pendown()
    t.color(wood_color)
    t.speed(0)
    t.left(90)
    branch(t, 100, 20, 0.8)

draw_tree()`})();
