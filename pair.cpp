#include<bits/stdc++.h>
using namespace std;

void printPair(){
   pair<int,int> p = {2,3};
   
   cout << p.first << " " << p.second;

   pair<int,pair<int,int>> p2 = {2,{3,4}};

   cout << endl;

   cout << p2.first << " "  <<  " " <<  p2.second.first << " " << p2.second.second;

   cout << endl;

   pair<int,int> arr[] = {{5,4},{3,2},{1,0},{10,9},{8,7}};

   cout << arr[0].first << endl << arr[1].second ;
}

int main(){

    printPair();
    return 0;
}