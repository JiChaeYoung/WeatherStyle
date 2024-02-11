package com.example.weatherstyle.entity.tag;

import java.util.ArrayList;
import java.util.List;

public class Utils {
    public static List<String> tagParse(String tags){
        String[] split = tags.split("#");
        List<String> list=new ArrayList<String>();

        for (String s : split) {
            list.add(s);
        }
        return list;
    }
}
