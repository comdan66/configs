### Generating ssh keys
* ssh-keygen -t rsa -C "your_email@example.com"
* Press enter


### Auto login
* pbcopy < ~/.ssh/id_rsa.pub
* ssh to server
* nano ~/.ssh/authorized_keys
* paste it.