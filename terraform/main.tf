provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0" # Update with your AMI ID
  instance_type = "t2.micro"
  tags = {
    Name = "WebServer"
  }
}

resource "aws_instance" "api" {
  ami           = "ami-0c55b159cbfafe1f0" # Update with your AMI ID
  instance_type = "t2.micro"
  tags = {
    Name = "ApiServer"
  }
}

resource "aws_instance" "mobile" {
  ami           = "ami-0c55b159cbfafe1f0" # Update with your AMI ID
  instance_type = "t2.micro"
  tags = {
    Name = "MobileServer"
  }
}
