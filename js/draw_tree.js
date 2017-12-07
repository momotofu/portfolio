import turtle
from random import randint

def open_window():
    window = turtle.Screen()
    window.bgcolor("white")
    return window

def draw_tree(x, y, distance, degrees):
    stroke_color = "#ffd600"
    newAmount = distance * 0.75 * 0.75

    # draw branch
    # reduce branch length
    # rotate and reduce branch size

    main_branch = turtle.Turtle()
    main_branch.hideturtle()
    main_branch.color(stroke_color)
    main_branch.speed("fastest")

    # move to starting pos
    main_branch.penup()
    main_branch.setpos((x, y))

    # rotate main branch to last angle
    main_branch.setheading(degrees + 30)

    #draw main branch
    main_branch.pendown()
    main_branch.pensize(2 * distance * 0.05)
    main_branch.forward(distance)

    # create second branch
    offshoot = turtle.Turtle()
    offshoot.hideturtle()
    offshoot.color(stroke_color)
    offshoot.speed("fastest")

    #move second branch to position of main_branch
    offshoot.penup()
    offshoot.pensize(main_branch.pensize())
    offshoot.setheading(degrees + randint(-15, 15))
    offshoot.setpos(main_branch.pos())

    #draw second offshoot branch
    offshoot.pendown()
    offshoot.right(randint(15,30))
    offshoot.forward(distance * 0.40)

    #draw second main branch
    main_branch.left(randint(15, 30))
    main_branch.forward(distance * 0.40)

    #start recursive call
    if (distance > 26):
        #get coordinates
        main_b_co = main_branch.pos()
        off_b_co = offshoot.pos()

        #get degrees
        main_b_degrees = main_branch.heading()
        off_b_degrees = offshoot.heading()

        print('a:', main_b_degrees, " b: ", off_b_degrees)

        #make recursive call
        draw_tree(main_b_co[0], main_b_co[1], newAmount, main_b_degrees)
        draw_tree(off_b_co[0], off_b_co[1], newAmount, off_b_degrees)

        draw_tree(main_b_co[0], main_b_co[1], newAmount, off_b_degrees)
        draw_tree(off_b_co[0], off_b_co[1], newAmount, 240 + main_b_degrees)

        # randomly create a fith branch
        num = randint(0,1)
        if (num == 1):
            draw_tree(main_b_co[0], main_b_co[1], newAmount * 0.7, main_b_degrees + 300)
        elif (num == 0):
            draw_tree(off_b_co[0], off_b_co[1], newAmount * 0.9, 100 + off_b_degrees)
            draw_tree(off_b_co[0], off_b_co[1], newAmount * 0.7, 300 + off_b_degrees)

    else:
        # set up leaf colors
        colors = ["#F9A825", "#FBC02D", "#FDD835", "#FF6F00", "#FFC107"]
        fill_color = colors[randint(0,4)]
        main_branch.color(fill_color)
        offshoot.color(fill_color)

        main_branch.begin_fill()
        main_branch.circle(2)
        main_branch.end_fill()

        offshoot.begin_fill()
        offshoot.circle(3)
        offshoot.end_fill()

def draw_circle(x_pos, y_pos, radius):
    chris = turtle.Turtle()
    chris.hideturtle()
    chris.color("green")
    chris.speed(20)

    chris.penup()
    chris.setpos((x_pos, y_pos))
    chris.pendown()
    chris.circle(radius)

    if (radius > 8):
        draw_circle(x_pos + radius /2, y_pos + radius/2, radius/2)
        draw_circle(x_pos - radius /2, y_pos + radius/2, radius/2)
        draw_circle(x_pos + radius/2, y_pos - radius/2, radius/2)
        draw_circle(x_pos + radius/2, y_pos + radius/2, radius/2)

window = open_window()
draw_tree(0, -400, 250, 60)
# draw_circle(0, 0, 160)
window.exitonclick()
