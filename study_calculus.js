from 

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

    current_focus = MetaAttention.getCurrentFocus()
	mind_wander = current_focus != Calculus

	if (mind_wander) {
		disengageAttention(current_focus);
		moveAttention(Calculus);
		holdAttention(Calculus);

	} //end if statement

	setTimeOut.(seconds=30)
	time_left = study_session.getTimeLeft()
}//end while loop

haveBreak();