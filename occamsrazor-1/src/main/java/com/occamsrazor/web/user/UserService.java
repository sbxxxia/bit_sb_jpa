package com.occamsrazor.web.user;

import java.util.List;

public interface UserService {

	public void join(User user);

	public List<User> findAll();

	public User findOne(String userid);

	public void modify(User user);

	public void remove(User user);

}
