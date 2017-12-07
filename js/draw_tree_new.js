(() => { window.turtle_code =  
`import turtle
from random import randint

leaf_colors = ["#F9A825", "#FBC02D", "#FDD835", "#FF6F00", "#FFC107"]
wood_color = "#795548"

def branch(t, length, angle, scale):
    if length < 2:
        t.color(leaf_colors[randint(0,4)])
        t.begin_fill()
        t.circle(randint(2,3))
        t.end_fill()
        t.color(wood_color)
        return
    random_degree = randint(-5, 5)
    t.pensize(int(2.1 * length * scale * .07))
    t.forward(length)
    t.left(angle + random_degree)
    branch(t, (randint(-15 - (length // 3), 21) + length) * scale, angle + randint(-5, 5) * scale, scale - 0.05)
    t.right(angle * 2 + random_degree)
    branch(t, (randint(-20 - (length // 4), 23) + length) * scale, angle + randint(-5, 5) * scale, scale - 0.04)
    t.left(angle + 180)
    t.forward(length)
    t.left(180)

def make_drawing():
    # turtle.tracer(25, None)
    t = turtle.Turtle();
    t.penup()
    t.setpos(0, -200)
    t.pendown()
    t.shape("turtle")
    t.color(wood_color)
    t.speed(0)
    t.left(90)
    branch(t, 100, 20, 0.8)

make_drawing()`})();
