# [Choice] .NET version: 6.0, 3.1, 6.0-bullseye, 3.1-bullseye, 6.0-focal, 3.1-focal
ARG VARIANT=6.0-bullseye
FROM composer AS composer
FROM mcr.microsoft.com/vscode/devcontainers/dotnet:0-${VARIANT}

# [Choice] Node.js version: none, lts/*, 18, 16, 14
ARG NODE_VERSION="none"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} --latest-npm 2>&1"; fi

RUN apt-get update; export DEBIAN_FRONTEND=noninteractive; \
    apt-get -y install --no-install-recommends \
        lsb-release \
        ca-certificates \
        apt-transport-https \
        software-properties-common; \
    echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php.list; \
    curl -sSL https://packages.sury.org/php/apt.gpg | apt-key add -; \
    apt-get update; \
    apt-get -y install --no-install-recommends \
        php8.0-cli; \
    rm -rf /var/lib/apt/lists/*;

# ssh to github over HTTPS/TLS port 443
USER vscode
RUN \
mkdir -p $HOME/.ssh && chmod 700 $HOME/.ssh; \
echo 'Host github.com \n\
  Hostname ssh.github.com \n\
  Port 443 \n\
  User git \n\
\n\
Host gist.github.com \n\
  Hostname ssh.github.com \n\
  Port 443 \n\
  User git \n\
'>  $HOME/.ssh/config
USER root

COPY --from=composer /usr/bin/composer /usr/local/bin/

RUN mkdir /app; chown 1000:1000 /app; touch /app/.gitkeep

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&
