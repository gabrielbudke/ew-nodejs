FROM gitpod/workspace-full

USER gitpod

# Install custom tools, runtimes, etc.
RUN sudo apt-get update \
 && sudo apt-get install -y postgresql-12
# RUN npm install -g mocha
#     sudo apt-get install -y zsh

# set the zsh theme 
# ENV ZSH_THEME cloud

# RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh 

