from executive_functions.attention import (
holdAttention,
disengageAttention,
moveAttention
)
from executive_functions.metaAwareness import getCurrentFocus
from classwork import Calculus

study_session = Stopwatch(hours=2)
time_left = study.getTimeLeft()

moveAttention(Calculus);
holdAttention(Calculus)

while (time_left != 0) {

    currentFocus = MetaAttention.getCurrentFocus()
    isMindWandering = current_focus != Calculus

    if (isMindWandering) {
        disengageAttention(currentFocus);
        moveAttention(Calculus);
        holdAttention(Calculus);

    } //end if statement

    setTimeOut.(seconds=30)
    time_left = study_session.getTimeLeft()
}//end while loop

haveBreak();