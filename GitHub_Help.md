
##  Starter guides

- <https://guides.github.com/>
- <http://rogerdudler.github.io/git-guide/>

 

## Workflow

Your local repository consists of three "trees" maintained by git. The first one is your Working Directory which holds the actual files. The second one is the Index which acts as a staging area and finally the HEAD which points to the last commit you've made.

Typical workflow will be like this:

- Create/update the files you need
- `git status` (to check the files that have been changed)
- `git add .` (to add all the modified/updated/created files)
- `git status` (to check that all files have been added)
- `git commit -m "message to describe the commit"` (the -m is for message)
- `git push` 



## Branch 

### Create a branch

- `git checkout -b "branchName" ` (branchName within double quotes)

- Edit files, add and commit. Then push with the -u (short for --set-upstream) option

- `git push origin -u branchName` (Git will set up the tracking information during the push)

  

### Delete a branch

`git branch -d branchName` (deletes the branch branchName)



### Rename a branch

<u>Step 1</u>

If you are on the branch you want to rename: `git branch -m newName`

If you are on a different branch: `git branch -m oldName newName`

<u>Step 2</u>

Delete the oldName remote branch and push the newName local branch: `git push origin :oldName newName` 

<u>Step 3</u>

Reset the upstream branch for the newName local branch. Switch to the branch and then: `git push origin -u newName` 





### Rebase

Git Rebase is used to put your current branch on top of the latest master copy. It is also helpful when you want to clear your version history for that branch and just have one update shown which is taken from the latest master copy.

<u>STEPS</u>

- `git stash` (to save temporarily any possible changes we have made)
- `git reset --hard` (to delete all the possible changes that we have made-be sure that ran the previous command)
- `git checkout master` (to go within master)
- `git fetch` (to check if there are possible updates in this branch(master) )
- `git pull` (to bring all the updates if exist)
- `git checkout branchName` ( to go within the branch that we were working-in this case branchName)
- Go to SourceTree, double check that we are on <u>our branch</u> and **NOT** in <u>master</u> . Find the last commit into master, right click on that commit and select rebase current changes onto master. When it finishes:
- `git push -f` (to be our branch (branchName) in the same position as master. Nor x commits ahead, neither y commits behind)
- `git stash pop` (to bring back the changes that we had before the rebase in our branch)

**<u>or through command line + text editor:</u>**

```git rebase --interactive master ``` For example, if your merge base is abc123, you would run ```git rebase --interactive abc123``` . Your text editor will open with a file that lists all the commits in your branch, and in front of each commit is the word "pick". It looks something like this:

```
pick 1fc6c95 do something

pick 6b2481b do something else

pick dd1475d changed some things

pick c619268 fixing typos

```

For every line except the first, you want to replace the word "pick" with the word "squash". It should end up looking like this:

```
pick 1fc6c95 do something

squash 6b2481b do something else

squash dd1475d changed some things

squash c619268 fixing typos
```

Save and close the file, and a moment later a new file should pop up in your editor, combining all the commit messages of all the commits. Reword this commit message as you want, and then save and close that file as well. This commit message will be the commit message for the one, big commit that you are squashing all of your larger commits into. Once you've saved and closed that file, your commits have been squashed together, and you're done with this step!

 

Perform the rebase

Run this command in your repository:

``` git rebase --continue```



 

### Squash

- In SourceTree go to your branch (branchName)
- At the main window find the line that has to do with the master branch
- Right click on that line
- Select Rebase children of <hash...> interactively ..
- From the list click at first checkbox and at the bottom buttons click 'squash with previous'
- Repetition of the previous step until there is only one commit
- When there is only 1 commit, click on 'edit message' from the bottom buttons and write the message you want to be displayed
- Click OK, Click OK
- Open a command line and type `git push -f` 
- Congrats, you have squashed all your commits into one.

**<u>or through command line + text editor:</u>** 

 - git rebase -i HEAD~5`  after tilde the number of the commits you want to squash, in this example are 5 the commits that I want to squash

- after that it will pop up a window and it will have something like 

  ```a931ac7c808e2471b22b5bd20f0cad046b1c5d0d c
  pick b4421eda fixing test
  pick 46329ec3 Added this and that
  pick 7f43b9cf Added more stuff
  pick 62c9b90e changed some stuff
  pick 21a6d19g creating this thing
  
  # Rebase fcdad13e..21a6d19g onto fcdad13e (5 commands)
  #
  # Commands:
  # p, pick = use commit
  # r, reword = use commit, but edit the commit message
  # e, edit = use commit, but stop for amending
  # s, squash = use commit, but meld into previous commit
  # f, fixup = like "squash", but discard this commit's log message
  # x, exec = run command (the rest of the line) using shell
  # d, drop = remove commit
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
  #
  # Note that empty commits are commented out
  
  ```

- then change the 2nd pick and everything after that with squash and you should have something like 

  ```s
  pick b4421eda fixing test
  squash 46329ec3 Added this and that
  squash 7f43b9cf Added more stuff
  squash 62c9b90e changed some stuff
  squash 21a6d19g creating this thing
  
  # Rebase fcdad13e..21a6d19g onto fcdad13e (5 commands)
  #
  # Commands:
  # p, pick = use commit
  # r, reword = use commit, but edit the commit message
  # e, edit = use commit, but stop for amending
  # s, squash = use commit, but meld into previous commit
  # f, fixup = like "squash", but discard this commit's log message
  # x, exec = run command (the rest of the line) using shell
  # d, drop = remove commit
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
  #
  # Note that empty commits are commented out
  ```

- save that and close that popup window

- it will pop up a new one which will be similar to:

  ```
  # This is a combination of 5 commits.
  # This is the 1st commit message:
  
  fixing test
  
  # This is the commit message #2:
  
  Added this and that
  
  # This is the commit message #3:
  
  Added more stuff
  
  # This is the commit message #4:
  
  changed some stuff
  
  # This is the commit message #5:
  
  creating this thing
  
  # Please enter the commit message for your changes. Lines starting
  # with '#' will be ignored, and an empty message aborts the commit.
  #
  # Author:    ab123456 <username@yahoo.com>
  # Date:      Fri Aug 17 16:53:05 2018 +0100
  #
  # interactive rebase in progress; onto fcdad13e
  # Last commands done (5 commands done):
  #    squash 64c9b90e a message here
  #    squash 22a6d19d a different message here
  # No commands remaining.
  # You are currently rebasing branch 'testBranch' on 'fcdad13e'.
  #
  # Changes to be committed:
  #	modified:   charted-view-dataaccess-ml/pom.xml
  #	modified:   repo/src/main/java/com/assessments/charted/something/BaseChartedImpl.java
  #	modified:  repo/src/main/java/com/assessments/charted/impl/ChartedDataSourceImpl.java
  
  
  ```

  Remove the unnecessary messages at the beginning in order to have something like

  ```
  # This is a combination of 5 commits.
  # This is the 1st commit message:
  
  creating this thing
  
  # Please enter the commit message for your changes. Lines starting
  # with '#' will be ignored, and an empty message aborts the commit.
  #
  # Author:    ab123456 <username@yahoo.com>
  # Date:      Fri Aug 17 16:53:05 2018 +0100
  #
  # interactive rebase in progress; onto fcbad03e
  # Last commands done (5 commands done):
  #    squash 64c9b90e a message here
  #    squash 22a6d19d a different message here
  # No commands remaining.
  # You are currently rebasing branch 'testBranch' on 'fcdad13e'.
  #
  # Changes to be committed:
  #	modified:   charted-view-dataaccess-ml/pom.xml
  #	modified:  repo/src/main/java/com/assessments/charted/something/BaseChartedImpl.java
  #	modified: repo/src/main/java/com/assessments/charted/impl/ChartedDataSourceImpl.java
  
  ```

  after that save it and close that window

- on terminal write `git push -f` 


another example of squashing

- `git log --pretty=oneline` (to see the history) 

  ie

  ```
  a931ac7c808e2471b22b5bd20f0cad046b1c5d0d c
  b76d157d507e819d7511132bdb5a80dd421d854f b
  df239176e1a2ffac927d8b496ea00d5488481db5 a
  ```

  a was the first commit, then b and last commit was c. After c we decide to squash b and c together.

- `git rebase --interactive HEAD~2` (will give us an editor such as below. Note that HEAD~2 means how many parents up do you want to merge with. If you committed and pushed twice then 2, if 4 then 4.)

  ```
  pick b76d157 b
  pick a931ac7 c
  
  # Rebase df23917..a931ac7 onto df23917
  #
  # Commands:
  #  p, pick = use commit
  #  r, reword = use commit, but edit the commit message
  #  e, edit = use commit, but stop for amending
  #  s, squash = use commit, but meld into previous commit
  #  f, fixup = like "squash", but discard this commit's log message
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  # However, if you remove everything, the rebase will be aborted.
  #
  ```

  Changing b's `pick` to `squash` will result error 'cannot squash without a previous commit' , but if instead you squash c into b (newer into the older) by changing the text to

  ```
  pick   b76d157 b
  squash a931ac7 c
  ```

  and save-quitting your editor, you'll get another editor whose contents are

  ```
  # This is a combination of 2 commits.
  # The first commit's message is:
  
  b
  
  # This is the 2nd commit message:
  
  c
  ```

  When you save and quit, the contents of the edited file become commit message of the new combined commit:

  ```
  $ git log --pretty=oneline
  18fd73d3ce748f2a58d1b566c03dd9dafe0b6b4f b and c
  df239176e1a2ffac927d8b496ea00d5488481db5 a
  ```

- after that run `git push -f` and you have squashed your commits into one.





### Log

In its simplest form, you can study repository history using `git log` . By adding parameters you are able to make the log look like what you want.

See commits of a certain author: `git log --author=george`

See compressed log where each commit is one line: `git log --pretty=oneline`

See only which files have changed: `git log --name-status` 

To check all the possible parameters you can use: `git log --help





### git squash alias

-  Make sure you do a git push first!

```
git config --global alias.squash '!f(){ git reset --softHEAD~${1} && git commit --edit -m"$(git log --format=%B --reverse [HEAD..HEAD@{1}](mailto:HEAD..HEAD@%7b1%7d))"; };f'
```

 

### git add

`git add -A`  (stages All)
`git add <filename>`  (stages specific file)
`git add .`  (stages new and modified, without deleted)
`git add -u`  (stages modified and deleted, without new) 

In a nutshell you must do a git add before doing any commits as any changes made after the add command won't be accounted for when the commit is done to the repo.

 

### Commit

Now the file is committed to the HEAD, but not in your remote repository yet.

```
git commit -m "Commit message"
```

 

### Add code to previous commit you did

Stage the file that you forgot then when you do your commit, provide the `-amend` and `-C` options.

```
git commit --amend –C HEAD
```

 Note that –amend will change the SHA1 ID of the commit

 

### Pushing changes to repo

If this is the first time you are pushing a local directory that doesn't exist in the repo then you must use origin, else use the name of the branch.

`git push origin NPT-473`

`git push origin NPT-473:NPT-473`

Pushes the "master" branch to "origin" remote and sets up tracking 

`git push -u origin master`

  

### Fetch and Merge

If your branch has been updated on the repo and your branch is now behind. Then you should do the following:

- `git fetch`  or `Fetch` button in SourceTree (ST)

- `Merge` button in ST and select the latest repo commit in that branch to merge current local branch with.

\- resolve any conflicts

\- Once resolved, do `git commit` to conclude

 

### Merging with the repo branch

before you merge you can view the changes by typing:

`git diff origin/master master`  (diff btwn remote and local )

`git checkout dmgr2`   (Gets you on branch dmgr2 )

`git fetch origin`    (Gets you up to date with origin )

`git merge origin/master`  (merge both of them )



### Undo a merge

`git reset --merge ORIG_HEAD`

Here ORIG_HEAD should point to a commit directly before merge has occurred.

 

### If you screwed up your branch and want to reset it from origin.

```
git reset --hard origin/NAME_OF_BRANCH
```



### Undo a git force push and revert the code on repo before the push

\- Find the commit you wish to revert to

```
git reflog show remotes/origin/master

89b85b3 remotes/origin/master@{0}: fetch --append --pruneorigin: forced-update 32c0dbf remotes/origin/master@{1}: update by push

15c8e79 remotes/origin/master@{2}: update by push b4ff13fremotes/origin/master@{3}: update by push 
```

 

`git checkout 32c0dbf`

\- Make sure all the code looks good?

`git checkout -b temp_branch`

`git push --force origin temp_branch:master`

 

 

#### Merge your conflicts by using difftool and mergetool

`git mergetool -t=winmerge`

 

#### Overwrite the last commit which has been pushed

```
git commit --amend -m "NPT-473 new files added"

git commit --amend -m "MPAGESRLSE-205 Adding PatientTimeline components 1.0.0"

git push origin npt-473 -f
```



This force pushes it because you are overwriting the last commit message.

You have to make sure you haven't changed the code else that will overwrite the last commit's code to what you have on your local repo.

 

 

### Update a local branch (not pushed) with latest from master 

```
git checkout master             # Checkout master

git fetch origin                # Updates origin/master

git rebase origin/master        # Rebases current branch onto origin/master

git checkout local_branch_name  # local branch to rebase

git rebase master               #rebase branch to master

git push --force                # force required if you've alreadypushed 
```





### Completely destroy local master and get the latest from repo

######  ``` git fetch origin git reset --hard origin/master git clean -f -d```

 

### Overwrite local changes with repo

`git checkout -- .`



 

## Convert a folder from a repo into its own repo withfull history

 

`https://help.github.com/articles/splitting-a-subfolder-out-into-a-new-repository/`

 

1. In terminal, navigate to new folder you want the repo to be in



2. Clone the repo you want to extract a folder from.



`git clone [https://github.com/USERNAME/REPOSITORY-NAME`](https://github.com/USERNAME/REPOSITORY-NAME%60)

 

3. Filter the repo for the folder you want and the branch you want to put it in.



`git filter-branch --prune-empty --subdirectory-filterptl-medications-component master`

 

4. Create new repo OR use an existing one to override.

\- check which remote git is linked

  `git remote -v`

 

\- change it with the following:

  `git remoteset-url origin [https://github.cerner.com/d015035/dptest-ptl-ui-medications-o1.git`](https://github.cerner.com/d015035/dptest-ptl-ui-medications-o1.git%60)

 

\- verify it has correct link with

  `git remote -v`

 

5. Update the new repo

  `git push -uorigin master`







##  Notepad++ text editor as default

 

```
git config --global core.editor "'C:\Program Files (x86)\Notepad++\notepad++.exe' -w"
```



 

## Sublime text editor as default

 

```
git config --global core.editor "'C:\ProgramFiles\Sublime Text 3\sublime_text.exe' -w"
```



\---

# Install the boilerplate for angular

`https://github.com/ngbp/ngbp`

 

Install Node.js and then:

```
$ git clone git://github.com/joshdmiller/ng-boilerplate

$ cd ng-boilerplate

$ sudo npm -g install grunt-cli karma bower npm installbower install grunt watch 
```

Finally, open <file:///path/to/ng-boilerplate/build/index.html> in your browser.

 

# If bower installation is causing an issue of running angit error - Bower ECMDERR or fatal: unable to connect to github.com

 

Step 1: It's due to being behind the firewall of your network. Change the git to https with the following command:

\```

```
git config --global url.https://github.com/.insteadOfgit://github.com/ 
```

Step 2: Re-install the following and make sure that the run git in command prompt is selected. 

<https://msysgit.github.io/>

 

# ERROR fatal: Reference has invalid format:'refs/heads/master

 

* This happens when you shutdown by holding power down.

* Clean up the directory of any conflicting branches etc. .git/refs/remotes/origin/ or.git/logs/remotes/origin/

