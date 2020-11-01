package com.quakearts.microservers;

import com.quakearts.appbase.Main;

public class CommunityAppMain {

	public static void main(String[] args) {
		Main.main(new String[] {AppInit.class.getName(),"-dontwaitinmain"});
	}

}
