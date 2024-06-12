output "web_instance_ip" {
  value = aws_instance.web.public_ip
}

output "api_instance_ip" {
  value = aws_instance.api.public_ip
}

output "mobile_instance_ip" {
  value = aws_instance.mobile.public_ip
}
