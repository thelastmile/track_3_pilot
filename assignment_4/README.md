# Building a better shell with zsh and iTerm2

When you open Terminal on Mac OS X, a program starts running, waiting for your commands.
That program is called the **shell**: it's the outer "shell" around the operating system, and
one of the primary interfaces for telling computers what to do.

By default, Terminal uses the `bash` shell to interpret your commands.

This project is going to set you up with `zsh`, a shell that is similar to `bash` but with a bunch
of useful improvements and extensions. Both `bash` and `zsh` are Borne-compatible shells, meaning,
both understand everything that is understood by the older `sh` program (named the Borne shell).

We're also going to set up iTerm2 instead of Terminal. iTerm2 is a more advanced terminal application,
with better customization options.

Jumping in...

## Part I: Setup

### Get the files

```
# Update your repo. Go inside the assignment_4 directory.
cd path/to/track3repo
git pull
cd assignment_4

# copy files to your home directory and extract.
cp -r zsh_setup.tar.gz ~/
cd ~
tar ztvf zsh_setup.tar.gz   # optional -- check tar archive contents.
tar zxvf zsh_setup.tar.gz   # extract
```

### Set up iTerm2

Move the iTerm2 application to your Desktop with the commands below:

```
cd zsh_setup
mv iTerm.app ~/Desktop/
```

The iTerm2 application should now appear on your desktop. Try double-clicking it.
Confirm that a terminal application correctly launched.

### Confirm you have `zsh`

`zsh` should already be installed on your machine. Double-check by typing `which zsh` at the prompt.

It should say something like `/usr/bin/zsh`, `/bin/zsh`, or perhaps `/usr/local/bin/zsh`.

Please get in touch with TLM staff if you do not have zsh installed.

### Configure iTerm2 to start `zsh` instead of `bash`

Focus the iTerm window, such that, in the upper-left corner of the screen, next to the apple icon,
you see "iTerm2" and "Shell" menus.

Go to iTerm2 > Preferences...

In the preferences window, click on the "Profiles" tab in-between "Appearance" and "Keys".

In the "General" subtab (the first subtab), Find the "Command" area. You should see two radio buttons:
"Login shell" and "Command". Make sure "Command" is selected. In the text box next to "Command", type:

```
/usr/bin/zsh --login
```

make the absolute path match exactly whatever was reported by `which zsh`. For example, if `which zsh`
returned `/bin/zsh`, then you instead want:

```
/bin/zsh --login
```

### Colorize iTerm2

`Solarized` is a carefully designed colorscheme for terminals and code editors. It's designed to be
easy on the eyes in many lighting conditions -- helpful for anyone that works on a terminal daily!

In the same iTerm2 > Preferences > Profiles screen, navigate to the `Colors` subtab.
It's right next to `General`.

To the bottom right of the screen, you should see a menu named `Color Presets...`.

Click on the menu and select `Solarized Dark`.

If you don't see a `Solarized Dark` option, click on `Import...` and navigate to
`zsh_setup/SolarziedDark.iterm`. That should add it.

### Test iTerm2 setup.

Close the preferences window. Quit iTerm2. Now double-click the app icon again to open a new terminal.

Confirm: is the background a dark bluish gray color now, instead of white?

Confirm: type `echo $SHELL`. Does it print a path that ends in `/zsh`? If so, you're successfully running zsh!

### Set up symbolic links to dotfiles

A *dotfile* in UNIX is any file that starts with a `.`

By default, `ls` hides these files. `ls -a`, short for "list all", shows them next to all the other files.

We're going to add dotfiles for `zsh` and, because it's easy, `vim` too. (Just in case you want to learn `vim` someday.)

Instead of copying files out of the `zsh_setup` dir, instead we're going to make symbolic links to them.
That way, all of your shell configuration stays in that directory, instead of spilling throughout your home directory.

Run these commands to set up symlinks:

```
cd ~
ln -s zsh_setup/dotzshrc .zshrc
ln -s zsh_setup/dotantigen .antigen
ln -s zsh_setup/dotantigen.zsh .antigen.zsh
ln -s zsh_setup/dotvim .vim
ln -s zsh_setup/dotvimrc .vimrc
```

To double-check that these commands ran successfully, run:

```
ls -la ~
```

You should now see 5 symlinks that start with `.` and point inside `zsh_setup`.

Now see if it works! Run:

```
source ~/.zshrc
```

This runs through each command in `.zshrc`, one line at a time, as if you typed it yourself.
Arcane UNIX trivia: the "rc" stands for "run commands".

`.zshrc` is also sourced every time you start a new shell. So in practice, the only time you'll need to run
`source .zshrc` manually is after you make changes to the file.

Finally, quit iTerm2 and restart it. When it opens a new window, do you get a nice prompt?

## Part II: A tour

The rest of this README walks you through all the new improvements. If you're ever wondering how it
works, feel free to ask questions, or try reading inside `.zshrc` to figure it out yourself.

To start: open two side-by-side terminal windows -- one on the left, one on the right. (In iTerm2,
pressing command-N opens a new terminal.)

To compare shells, you want `bash` on the left and `zsh` on the right. On the left terminal, type `bash`.
The right terminal should already be running `zsh`.

### Colors

Your left terminal probably isn't very colorful, whereas zsh should be. For example, try typing:

```
man ln
```

in both terminals. You should see nice colors on the right, making it easier to browse.

### The Prompt

I use a minimal but information-dense prompt theme named `pure`, released as free software on github.
Some nice features:

* It prints the directory you're in. Try typing `pwd` (print working directory) and it should show the same thing.
* If you're inside a `git` repo, it'll tell you what branch you're on, whether you have uncommitted changes
(it'll add an astrisk), and whether you have commits to push (up arrow) or other people's commits to pull (down arrow).
* If you're on a remote connection, typically through `ssh`, it'll show the hostname.
* If a command takes more than 10 seconds to run, when it complete, it'll print how long it took. This is handy for jobs
you leave running overnight. Try for yourself: type `sleep 11`.

If you want to disable this theme and make your own, open `.zshrc` in Sublime. Comment out these two lines:

```
antigen bundle mafredri/zsh-async
antigen bundle sindresorhus/pure
```

then define `PROMPT` and `RPROMPT` (right prompt) environment variables. Bash PROMPT syntax should work. Type `source ~/.zshrc`,
or an alias I added, `sz`, to test your changes.

### Smarter command completion

In both terminals, type `git c` and then tab to autocomplete. `zsh` on the right should show you all
git commands that start with `c`, whereas `bash` on the left should unhelpfully show you files starting
with `c`.

Try the same experiment, but with `ln -` then tab. `zsh` should show you all option flags for the `ln` command,
with short docs. What does `bash` do?

Try the same thing with `cd`, then space, then tab. `zsh` on the right should only show directories, whereas
`bash` unhelpfully shows files too.

`zsh` doesn't know how to autocomplete everything, but people have made plugins for most popular commands.
Try `npm`, for example.

### Command syntax highlighting

In `zsh` on the right, try typing (without pressing enter):

```
ls -la ~/zsh_setup/dotzshrc
```

`ls` should appear yellow, and the file at the end should be underlined, indicating a valid file path.

Now try typing (again without pressing enter):

```
ld -la zsh_setup/dotzshrcc
```

`ld` should appear red now, indicating a command that isn't known, and the file path should no longer
be underlined, indicating an invalid path. This is to help you avoid typos.

### History search

The new `zsh` configuration you're using does something *extremely useful* that `bash` doesn't do by default:

* it combines all commands you type into a single history file (by default each window gets its
own separate history.)
* it makes that history file huge -- it remembers the last 20000 commands.

This means that when you type `ctrl-r` to search through past commands, you'll search over everything,
even commands you typed years ago.

### Up and down arrow

In both shells, try typing (without entering):

```
ls
```

then press the up and down arrows. In `zsh`, it should return the last commands you typed that start with `ls`.
What happens in `bash`?

### Extended globbing

When you type `ls *.txt`, it lists all files in the current directory that end in `.txt`.

`zsh` has a recursive `**` variant. To print all `.js` files in all subdirectories. Give it a try:

```
cd ~
ls **/*.js
```

In `zsh`, `**/` means "search recursively".

### Command autocorrection

`zsh` can attempt to autocorrect typos for you. I find this behavior annoying, so I disabled it by default, but
I know other programmers that swear by it. If you'd like to experiment, open `zsh_setup/dotzshrc` in Sublime, go to
the end, and uncomment:

```
# setopt CORRECT
```

Finally, comment these lines out:

```
setopt NO_MENU_COMPLETE
setopt NO_AUTO_MENU
unsetopt correct correctall
```

Save in Sublime, then in your shell, type:

```
source ~/.zshrc
```

### `vim`

One of the all-time most popular question on Stack Overflow is: how do I exit vim? As of May 2017,
that thread has been viewed over a million times.

Try opening a file in vim:

```
vim README.md
```

Here's how to quit: type `:q!`. The `:` takes you to the vim command prompt. `q` means quit, and `!` forces it.
`:q` works too if you haven't made any changes.

If the above doesn't work, press escape a few times, and try again -- escape takes you back to vim's command mode.

If you're interested in learning `vim`, you now have the `.vimrc` file and plugins (inside `.vim` dir) that I've been
using for years. You'll want to find an introductory `vim` book.
