FROM  ruby:2.6.3-buster

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1 \ 
    #
    # Verify git and needed tools are installed
    && apt-get install -y git procps \
    && gem install bundler
# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog
ENV SHELL /bin/bash