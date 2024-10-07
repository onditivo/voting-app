const Global = () => { }

Global.isVotePage = true;
Global.pollId = 0;
Global.vote = '';

Global.toggleIsVotePage = () => {
    Global.isVotePage = !Global.isVotePage;
}

export default Global;