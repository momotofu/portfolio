(() => { window.turtle_code =  
`import turtle
from random import randint

leaf_colors = ["#F9A825", "#FBC02D", "#FDD835", "#FF6F00", "#FFC107"]
wood_color = "#795548"

def branch(t, length, angle, scale):
    if length < 10:
        t.color(leaf_colors[randint(0,4)])
        t.begin_fill()
        t.circle(randint(2,3))
        t.end_fill()
        t.color(wood_color)
        return
    t.pensize(2 * length * 0.05)
    t.forward(length)
    t.left(angle)
    branch(t, length * scale, angle + randint(-5, 5) * scale, scale - 0.02)
    t.right(angle * 2)
    branch(t, length * scale, angle + randint(-5, 5) * scale, scale - 0.02)
    if (randint(1, 5) == 1):
        branch(t, length * scale, angle + randint(-25, 25), scale)
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
